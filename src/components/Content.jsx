const Content = () => {
  return (
    <main className="hero container">
      <div className="content">
        <h1>Your Feet Deserve The Best</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          deserunt reprehenderit illum at voluptas dolore, repellat consequuntur
          voluptatem vel a magni voluptates molestias amet consectetur
          aspernatur tempore veniam temporibus! 
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="shoping">
            <p>Also available on</p>

            <div className="brand-icon">
                <img src="brand-page-images\amazon.png" alt="amazon-logo" />
                <img src="brand-page-images\flipkart.png" alt="flipkart-logo" />
            </div>
        </div>
      </div>

      <div className="image">
        <img src="brand-page-images\shoe_image.png" alt="shoes-image" />
      </div>
    </main>
  );
};

export default Content;
