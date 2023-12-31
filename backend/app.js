const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const bcrypt = require("bcryptjs")
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'));

const port = 3000
const uri = "mongodb+srv://admin:admin@atlascluster.bqhecpf.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function getDatabase() {

  await client.connect();
  console.log("Successfully connected to Atlas");
  return client.db('web2-project')
}



app.get('/', (req, res) => {
  res.redirect('/index.html')
})



app.get('/api/veganRecipes', async (req, res) => {
  try {
    const db = await getDatabase()
    let result = await db.collection("veganRecipes").find({}).toArray();
    res.send(result);

    console.log(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  finally {
    await client.close()
  }
})




app.get('/api/restaurants', async (req, res) => {
  try {
    const db = await getDatabase();
    let result = await db.collection("restaurants").find({}).toArray();
    res.send(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.get('/api/veganRecipes/:id', async (req, res) => {
  try {
    console.log('HERE IS THE ID ' + req.params.id)
    const db = await getDatabase()
    let ida = new ObjectId(req.params.id)
    let result = await db.collection("veganRecipes").findOne({ _id: ida });
    res.send(result);

    console.log(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  finally {
    await client.close()
  }
})


app.delete('/api/veganRecipes/:id', async (req, res) => {

  try {
    const db = await getDatabase()
    let recipeId = new ObjectId(req.params.id)
    let result = await db.collection("veganRecipes").deleteOne({ _id: recipeId });


    if (result.deletedCount === 0) throw new Error('Recipe not found');

    res.json({ message: 'Recipe deleted successfully' });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  finally {
    await client.close()
  }
})


app.post('/api/veganRecipes', async (req, res) => {
  try {
    //if (!req.body.name||!req.body....) 400 bad request missing nameqsjdflsdf
    const db = await getDatabase()

    let newRecipe = {
      name: req.body.name,
      people: req.body.people,
      time: req.body.time,
      description: req.body.description,

    }
    db.collection("veganRecipes").insertOne(newRecipe);
    res.json({ message: "inserted a recipe in db" });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  finally {
    await client.close()
  }
})


app.put('/api/veganRecipes/:id', async (req, res) => {
  try {
    const db = await getDatabase()
    let recipeId = new ObjectId(req.params.id)
    let result = await db.collection("veganRecipes").updateOne({ _id: recipeId }, { $set: req.body });
    console.log('msdg ' + JSON.stringify(result))

    res.json({ message: "updated a recipe in db" });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  finally {
    await client.close()
  }
})


app.post('/auth/register', async (req, res) => {
  let result_id;
  const { username, password, email, confirm_password } = req.body;

  let hashedPassword = await bcrypt.hash(password, 8)

  if (!username || !email || !password || !confirm_password) {
    return res.status(400).json({ message: "password, email or username are required" });

  }
  if (password != confirm_password) {
    return res.status(400).json({ message: "passwords do not match" });
  }

  const db = await getDatabase();
  const verifyEmail = await db.collection("users").findOne({ email: email });
  const verifyUsername = await db.collection("users").findOne({ username: username });

  if (verifyEmail || verifyUsername) {

    if (verifyEmail) { return res.status(400).json({ message: 'A user with this email already exists' }); }
    if (verifyUsername) { return res.status(400).json({ message: 'This username is already taken.' }); }

  }
  else {

    let newuser = { email, username, password: hashedPassword }
    console.log('new user ' + JSON.stringify(newuser))
    let result = await db.collection("users").insertOne(newuser);
    result_id = result.insertedId;
    return res.send({ message: 'User successfully created ! ', id: result_id });
  }

});


app.post('/auth/login', async (req, res) => {

  const { password, email } = req.body;
  console.log('user information ' + password, email)

  if (!email || !password) {
    return res.status(400).send({ message: "password or email are required" });
  }

  const db = await getDatabase();

  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return res.status(400).send({ message: "This account doesn't exist" });
  }
  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  return res.send({ message: 'User successfully logged in ! ', id: user._id });
});




app.get('/api/favorites/:userId', async (req, res) => {

  try {
    const db = await getDatabase()
    const favorite = await db.collection("favorites").findOne({ user_id: req.params.userId });
    res.send(favorite);

  } catch (error) {
    res.status(404).json({ error: error.message });
  }
  finally {
    await client.close()
  }

});

app.get('/api/users/:id', async (req, res) => {

  try {
    const db = await getDatabase()
    let idUser = new ObjectId(req.params.id)
    //exclude password from being send to frontend when verify by id if user exists in db
    const user = await db.collection("users").findOne({ _id: idUser }, { projection: { password: 0 } })
    res.send(user);

  } catch (error) {
    res.status(404).json({ error: error.message });
  }
  finally {
    await client.close()
  }

});

app.post('/api/favorites', async (req, res) => {

  try {
    const db = await getDatabase()
    let userId = req.query.user_id;
    let favoriteId = req.query.favorite_id;
    const favorite = await db.collection("favorites").insertOne({ user_id: userId, favorite_id: favoriteId });
    res.send(favorite);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  finally {
    await client.close()
  }

});




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
