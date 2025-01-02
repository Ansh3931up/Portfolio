// First create a utility file for GitHub API calls
export type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  language: string;
  created_at: string;
  updated_at: string;
}

export type GitHubUser = {
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
}

export async function getGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    },
    next: {
      revalidate: 3600 // Revalidate every hour
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub user');
  }
  
  return response.json();
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    },
    next: {
      revalidate: 3600 // Revalidate every hour
    }
  });
  
  if (!response.ok) {
    const error = await response.text();
    console.error('GitHub API Error:', error);
    throw new Error('Failed to fetch GitHub repos');
  }
  
  return response.json();
}
