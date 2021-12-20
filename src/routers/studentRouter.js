const express = require("express");
const router = express.Router();
var StudentModel = require('../model/studentschema');

router.get('/save', function(req, res) {
    var newStudent = new StudentModel({
        StudentId:101, 
        Name:"Sam", 
        Roll:1, 
        Birthday:2001-09-08
    });

    newStudent.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});


router.post('/save', function(req, res) {
    var newStudent = new StudentModel();
       newStudent.StudentId = req.body.StudentId;
       newStudent.Name = req.body.Name;
       newStudent.Roll = req.body.Roll;
       newStudent.Birthday = req.body.Birthday;
       
       newStudent.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });

    //Retrieve
    router.get('/findall', function(req, res) {
        StudentModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });

     router.get('/findfirst', function(req, res) {
        StudentModel.findOne({StudentId:{$gt:185}}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
    });

    router.get('/delete', function(req, res) {
        StudentModel.remove({StudentId:188}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
    });

    router.post('/delete', function(req, res) {
        StudentModel.findByIdAndDelete((req.body.id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });  
    });

    router.post('/update', function(req, res) {
        StudentModel.findByIdAndUpdate(req.body.id, 
        {Name:req.body.Name}, function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });
    module.exports = router;

    /*
    // Get all posts
    router.get("/posts", async (req, res) => {
        const posts = await Post.find()
        res.send(posts)
    })

    
router.patch("/posts/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id })

		if (req.body.title) {
			post.title = req.body.title
		}

		if (req.body.content) {
			post.content = req.body.content
		}

		await post.save()
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})
 */
