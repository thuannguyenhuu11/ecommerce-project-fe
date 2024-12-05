import blogsData from '@/data/blogs.json';

const Blogs = () => {
    return (
        <section className='section__container blog__container'>
            <h2 className='section__header'>Latest From Blog</h2>
            <p className='section__subheader'>
                Elevate your wardrobe with our freshest style tips, trends, and
                inspiration on our blog.
            </p>

            <div className='grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {blogsData.map((blog, index) => (
                    <div
                        key={index}
                        className='transition-all duration-300 cursor-pointer blog__card hover:scale-105'
                    >
                        <img src={blog.imageUrl} alt='blog-image' />
                        <div className='blog__card__content'>
                            <h6>{blog.subtitle}</h6>
                            <h4>{blog.title}</h4>
                            <p>{blog.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
