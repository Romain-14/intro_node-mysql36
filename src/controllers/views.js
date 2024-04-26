import pool from "../database/config.js";

const home_view = (req, res) => {
	const query = "SELECT id, title, content FROM story";
	pool
		.query(query)
		.then((response) => {
            res.render("index", { stories: response[0]});
        })
		.catch((error) => console.log(error));        
	
};

const story_view = (req, res) => {
    const { id } = req.params; 
    
    const query = "SELECT id, title, content FROM story WHERE id = ?";
    pool.query(query, [id])
        .then(response => {
            res.render("story", { story: response[0][0] });
        })
        .catch((error) => console.log(error));  
}

export { home_view, story_view };
