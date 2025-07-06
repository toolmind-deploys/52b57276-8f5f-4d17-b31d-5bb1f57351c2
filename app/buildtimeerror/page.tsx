import { foo } from '@/lib/nonexistent'

export default function BuildTimeErrorPage() {
    return (
        <div>
            <h1>This page triggers a build time error.</h1>
        </div>
    )
}
