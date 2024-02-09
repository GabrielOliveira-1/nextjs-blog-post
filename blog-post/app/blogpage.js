export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Blog Post</h2>
            <p>{params.slug}</>
        </main>
    );    
}