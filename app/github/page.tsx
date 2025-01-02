import { GitHubProfile } from '../components/github-profile'
import { SideSection } from '../components/side-section'
import { CVPopup } from '../components/cv-popup'
import { GitHubUser, GitHubRepo, getGitHubUser, getGitHubRepos } from '../utils/github'
import { Navigation } from '../components/navigation'
import { MovingSubheader } from '../components/moving-subheader'

export default async function Home() {
  try {
    // Fetch GitHub data at build time
    const [user, repos] = await Promise.all([
      getGitHubUser('Ansh3931up'),
      getGitHubRepos('Ansh3931up')
    ]);

    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <MovingSubheader />
        <div className="flex flex-col lg:flex-row">
          {/* Side Section */}
          <SideSection />

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Hero Section */}
            <section className="mb-12">
              <h1 className="font-newspaper-title text-4xl sm:text-5xl md:text-6xl mb-6">
                {user.name}
              </h1>
              <p className="font-newspaper-body text-lg text-muted-foreground mb-8">
                {user.bio}
              </p>
              <div className="flex gap-4">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
                >
                  View GitHub
                </a>
                <CVPopup />
              </div>
            </section>

            {/* Featured Projects */}
            <section className="mb-12">
              <h2 className="font-newspaper-heading text-3xl mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repos.slice(0, 4).map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-card rounded-lg border border-primary/20 hover:border-primary transition-colors"
                  >
                    <h3 className="font-newspaper-heading text-xl mb-2">
                      {repo.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {repo.description || 'No description available'}
                    </p>
                    {repo.language && (
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {repo.language}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </section>

            {/* Latest Activity */}
            <section className="mb-12">
              <h2 className="font-newspaper-heading text-3xl mb-6">Latest Activity</h2>
              <div className="bg-card p-6 rounded-lg border border-primary/20">
                <div className="space-y-4">
                  {repos.slice(0, 3).map((repo) => (
                    <div key={repo.id} className="flex items-center justify-between">
                      <div>
                        <h3 className="font-newspaper-heading text-lg">
                          {repo.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Last updated: {new Date(repo.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        View →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* GitHub Stats Overview */}
            <section>
              <h2 className="font-newspaper-heading text-3xl mb-6">GitHub Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border border-primary/20">
                  <h3 className="font-newspaper-heading text-xl mb-2">Repositories</h3>
                  <p className="text-3xl font-bold">{user.public_repos}</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-primary/20">
                  <h3 className="font-newspaper-heading text-xl mb-2">Followers</h3>
                  <p className="text-3xl font-bold">{user.followers}</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-primary/20">
                  <h3 className="font-newspaper-heading text-xl mb-2">Following</h3>
                  <p className="text-3xl font-bold">{user.following}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    )
  } catch (error) {
    console.error('Error loading GitHub data:', error)
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-newspaper-heading text-2xl mb-4">
            Unable to load profile data
          </h1>
          <p className="text-muted-foreground">
            Please try refreshing the page
          </p>
        </div>
      </main>
    )
  }
}