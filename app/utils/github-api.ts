export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  languages_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  size: number;
  default_branch: string;
  archived: boolean;
  disabled: boolean;
}

export interface GitHubLanguage {
  [key: string]: number;
}

export interface ProjectWithImage {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  languages: GitHubLanguage;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  image: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'DSA' | 'Mobile';
  status: 'Completed' | 'In Progress' | 'Planning';
  featured: boolean;
  technologies: string[];
}

// GitHub API configuration
const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'anshkumar3931';

// Cache for API responses
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function fetchWithCache(url: string): Promise<any> {
  const cached = cache.get(url);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-App',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    cache.set(url, { data, timestamp: Date.now() });
    return data;
  } catch (error) {
    console.error('GitHub API fetch error:', error);
    throw error;
  }
}

export async function fetchUserRepos(): Promise<GitHubRepo[]> {
  const url = `${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=50`;
  return fetchWithCache(url);
}

export async function fetchRepoLanguages(repo: GitHubRepo): Promise<GitHubLanguage> {
  const url = `${GITHUB_API_BASE}/repos/${USERNAME}/${repo.name}/languages`;
  return fetchWithCache(url);
}

export async function fetchRepoImage(repo: GitHubRepo): Promise<string> {
  // Try to get image from repository
  const imageUrls = [
    // Try common image locations
    `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${repo.default_branch}/screenshot.png`,
    `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${repo.default_branch}/screenshot.jpg`,
    `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${repo.default_branch}/preview.png`,
    `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${repo.default_branch}/preview.jpg`,
    `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${repo.default_branch}/demo.png`,
    `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${repo.default_branch}/demo.jpg`,
    `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${repo.default_branch}/assets/preview.png`,
    `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${repo.default_branch}/public/preview.png`,
    `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${repo.default_branch}/src/assets/preview.png`,
  ];

  // Check which image exists
  for (const imageUrl of imageUrls) {
    try {
      const response = await fetch(imageUrl, { method: 'HEAD' });
      if (response.ok) {
        return imageUrl;
      }
    } catch (error) {
      // Continue to next URL
    }
  }

  // Fallback to a default image based on project type
  return getDefaultProjectImage(repo);
}

function getDefaultProjectImage(repo: GitHubRepo): string {
  const name = repo.name.toLowerCase();
  
  if (name.includes('portfolio') || name.includes('personal')) {
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop';
  } else if (name.includes('ecommerce') || name.includes('shop')) {
    return 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop';
  } else if (name.includes('algorithm') || name.includes('dsa') || name.includes('leetcode')) {
    return 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop';
  } else if (name.includes('task') || name.includes('todo')) {
    return 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop';
  } else if (name.includes('weather')) {
    return 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop';
  } else if (name.includes('chat') || name.includes('messaging')) {
    return 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop';
  } else {
    return 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop';
  }
}

function categorizeProject(repo: GitHubRepo, languages: GitHubLanguage): 'Full Stack' | 'Frontend' | 'Backend' | 'DSA' | 'Mobile' {
  const name = repo.name.toLowerCase();
  const description = (repo.description || '').toLowerCase();
  const langKeys = Object.keys(languages);
  
  // DSA and Algorithm projects
  if (name.includes('algorithm') || name.includes('dsa') || name.includes('leetcode') || 
      name.includes('data-structure') || description.includes('algorithm')) {
    return 'DSA';
  }
  
  // Mobile projects
  if (langKeys.includes('Swift') || langKeys.includes('Kotlin') || langKeys.includes('Dart') ||
      name.includes('mobile') || name.includes('react-native')) {
    return 'Mobile';
  }
  
  // Full Stack projects (has both frontend and backend languages)
  const frontendLangs = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vue', 'React'];
  const backendLangs = ['Python', 'Java', 'Go', 'Rust', 'PHP', 'Ruby', 'C#', 'C++'];
  
  const hasFrontend = langKeys.some(lang => frontendLangs.includes(lang));
  const hasBackend = langKeys.some(lang => backendLangs.includes(lang));
  
  if (hasFrontend && hasBackend) {
    return 'Full Stack';
  }
  
  // Backend projects
  if (hasBackend && !hasFrontend) {
    return 'Backend';
  }
  
  // Frontend projects
  return 'Frontend';
}

function determineStatus(repo: GitHubRepo): 'Completed' | 'In Progress' | 'Planning' {
  const now = new Date();
  const lastPushed = new Date(repo.pushed_at);
  const daysSinceLastPush = (now.getTime() - lastPushed.getTime()) / (1000 * 60 * 60 * 24);
  
  if (daysSinceLastPush < 7) {
    return 'In Progress';
  } else if (daysSinceLastPush < 30) {
    return 'Completed';
  } else {
    return 'Planning';
  }
}

function isFeatured(repo: GitHubRepo): boolean {
  const featuredKeywords = ['portfolio', 'neura', 'ecommerce', 'algorithm', 'task', 'weather'];
  const name = repo.name.toLowerCase();
  const description = (repo.description || '').toLowerCase();
  
  return featuredKeywords.some(keyword => 
    name.includes(keyword) || description.includes(keyword)
  ) || repo.stargazers_count > 0;
}

export async function fetchProjectsWithImages(): Promise<ProjectWithImage[]> {
  try {
    const repos = await fetchUserRepos();
    
    // Filter out archived, disabled, and fork repositories
    const filteredRepos = repos.filter(repo => 
      !repo.archived && 
      !repo.disabled && 
      !repo.name.includes('fork') &&
      repo.name !== 'anshkumar3931' // Exclude the username repo itself
    );
    
    const projects: ProjectWithImage[] = [];
    
    for (const repo of filteredRepos.slice(0, 12)) { // Limit to 12 projects
      try {
        const [languages, image] = await Promise.all([
          fetchRepoLanguages(repo),
          fetchRepoImage(repo)
        ]);
        
        const project: ProjectWithImage = {
          id: repo.id,
          name: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: repo.description || 'No description available',
          html_url: repo.html_url,
          homepage: repo.homepage,
          topics: repo.topics,
          language: repo.language,
          languages,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          image,
          category: categorizeProject(repo, languages),
          status: determineStatus(repo),
          featured: isFeatured(repo),
          technologies: Object.keys(languages).slice(0, 6), // Top 6 technologies
        };
        
        projects.push(project);
      } catch (error) {
        console.error(`Error processing repo ${repo.name}:`, error);
      }
    }
    
    // Sort by featured first, then by update date
    return projects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
    
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}
