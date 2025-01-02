export type SearchableItem = {
  id: string;
  title: string;
  content: string;
  type: 'project' | 'skill' | 'testimonial' | 'about';
  url: string;
}

export function searchContent(query: string, items: SearchableItem[]) {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return [];
  
  return items.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(searchTerm);
    const contentMatch = item.content.toLowerCase().includes(searchTerm);
    return titleMatch || contentMatch;
  });
} 