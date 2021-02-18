export default function formatSlug(slug: string): string {
  return slug.replace(' ', '-').toLowerCase()
}
