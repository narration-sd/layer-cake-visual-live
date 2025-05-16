export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-08'

// *todo* need to redo these for proper alternate tests
export const dataset = assertValue(
  (process.env.NEXT_PUBLIC_SANITY_DATASET
    ?? process.env.SANITY_STUDIO_DATASET),
'Missing environment variable: NEXT_PUBLIC_SANITY/SANITY_STUDIO _DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  ?? process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY/SANITY_STUDIO _PROJECT_ID'
)

export const previewUrl = assertValue(
  process.env.NEXT_PUBLIC_STUDIO_PREVIEW_URL
  ?? process.env.SANITY_STUDIO_PREVIEW_URL,
  'Missing environment variable: NEXT_PUBLIC_STUDIO/SANITY_STUDIO _PREVIEW_URL'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
