# Yelp Camp Application

## How to Run Application

1. Configure environment to connect with mongoDB, cloudinary, and access API
   ```
   CLOUDINARY_CLOUD_NAME= <cloudinary name>
   CLOUDINARY_KEY= <cloudinary API Key>
   CLOUDINARY_SECRET= <cloudinary secret key>
   MAPBOX_TOKEN= <mapBox API Token>
   ATLAS_PASSWORD= <mongoDB Atlas password>
   DB_URL= <mongoDB Database Url>
   SECRET= <session secret key>
   ```

2. Run `npm install`

3. Run `node app.js`

4. Browse `http://localhost:3000`
