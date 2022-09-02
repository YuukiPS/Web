import Link from 'next/link'

export default function FourOhFour() {
    return <>

        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">404</h1>
                    <p class="py-6">If you are playing and get this 404 error, please update our domain to keep playing. click back for how to connect again</p>
                    <Link href="/"><button class="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
        </div>

    </>
}