const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const Review = require("../models/todo.model");
const ReviewsRelational = require("../models/reviewsRelational.model");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin,
} = require("../helpers/middlewares");

// GET '/products' Get all products
router.get("/products", (req, res, next) => {
  console.log("Get product list");
  Product.find()
    .populate({
      path: "review",
      populate: {
        path: "userId",
      },
    })
    .then((productList) => {
      // console.log("productList :>> ", productList);
      res.status(200).json(productList);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/products' Create Product
router.post("/products", (req, res, next) => {
  console.log("Add product");
  const {
    image,
    name,
    description,
    dimension,
    category,
    technic,
    material,
    price,
    stock,
  } = req.body;

  Product.create({
    image,
    name,
    description,
    dimension,
    category,
    technic,
    material,
    price,
    stock,
  })

    .then((productList) => {
      res.status(200).json(productList);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/products/:productId' Get all products
router.get("/products/:productId", (req, res, next) => {
  console.log("Get product detail");
  const productId = req.params.productId;
  Product.findById(productId)
    // .populate("review")
    .populate({
      path: "review",
      populate: {
        path: "reviewUser",
      },
    })
    .then((productFound) => {
      console.log("productFound :>> ", productFound);
      res.status(200).json(productFound);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/cart' Get all products
router.get("/cart", isLoggedIn, (req, res, next) => {
  console.log("Get user cart");
  const userId = req.session.currentUser._id;
  User.findById(userId)
    .populate("basket")
    .then((userFound) => {
      res.status(200).json(userFound);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/products/categories'
router.get("/categories", (req, res, next) => {
  console.log(" Get categories");
  Product.find()
    .then((productsFound) => {
      const categoriesArr = [];
      productsFound.forEach((elem) => {
        // //console.log("elem :>> ", elem);
        categoriesArr.push(elem.category);
      });
      const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
      };

      const response = { data: categoriesArr.filter(onlyUnique) };
      // //console.log("response :>> ", response);
      res.status(200).json(response);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/products per categories' Get all products
router.get("/categories/:category", (req, res, next) => {
  console.log("Get products per categories");
  const category = req.params.category;
  Product.find({ category })
    .then((productList) => {
      // //console.log("productList :>> ", productList);
      res.status(200).json(productList);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// post '/cart' Update cart
router.post("/cart", isLoggedIn, (req, res, next) => {
  console.log("Update user Cart");
  const userId = req.session.currentUser._id;
  const basket = req.body;
  User.findByIdAndUpdate({ _id: userId }, { basket: basket })
    .then((userFound) => {
      res.status(200).json(userFound);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// POST  product/:productId/reviews / Create product reviews
router.post("/product/:productId/reviews", isLoggedIn, (req, res, next) => {
  console.log("reviews create post");
  const userId = req.session.currentUser ? req.session.currentUser._id : "";
  const { title, message, rate, productId } = req.body;
  let review = null;
  let reviewId = null;
  // CREATING REVIEW
  Review.create({ title, message, rate, userId, productId })
    .then((reviewCreated) => {
      review = reviewCreated;
      reviewId = reviewCreated._id;
      //console.log("reviewId :>> ", reviewId);
      const pr = ReviewsRelational.create({ userId, reviewId, productId });
      return pr;
    })
    .then((ReviewsRelationalCreated) => {
      const pr = Product.findById(productId);
      return pr;
    })
    .then((productFound) => {
      //console.log("ProductFound :>> ", productFound);
      let productreviewArr = productFound.review;
      let rating = Number(productFound.rating);
      let numReviews = Number(productFound.numReviews);
      // console.log("rate, rating :>> ", rate, rating);
      rating += Number(rate);
      numReviews++;
      productreviewArr.push(reviewId);

      //UPDATING PRODUCT REVIEWS
      const pr = Product.findByIdAndUpdate(
        { _id: productId },
        { review: productreviewArr, rating, numReviews }
      );
      return pr;
    })
    .then((productModified) => {
      res.status(200).json(review);
    })
    .catch((err) => {
      next(createError(err));
    });
});

//`/api/product/:productId/reviews`
router.delete(
  "/product/:productId/review/:reviewId",
  isLoggedIn,
  (req, res, next) => {
    console.log("Removing review");
    const reviewId = req.params.reviewId;
    const productId = req.params.productId;
    // console.log("reviewId, productId :>> ", reviewId, productId);
    let review = null;
    Review.findByIdAndRemove(reviewId)
      .then((reviewRemoved) => {
        review = reviewRemoved;
        const pr = Product.findById(productId);
        return pr;
      })
      .then((productFound) => {
        let reviewsProductArr = productFound.review;
        // //console.log("reviewsProductArr :>> ", reviewsProductArr);
        for (let index = 0; index < reviewsProductArr.length; index++) {
          // //console.log("reviewsProductArr[index] :>> ", reviewsProductArr[index]);
          if (reviewsProductArr[index] == reviewId) {
            reviewsProductArr.splice(index, 1);
          }
        }
        const pr = Product.findByIdAndUpdate(
          { _id: productId },
          { review: reviewsProductArr }
        );
        return pr;
      })
      .then((productModified) => {
        const pr = ReviewsRelational.deleteOne({ reviewId });
        return pr;
      })
      .then((userModified) => {
        res.status(200).json(review);
      })
      .catch((err) => {
        next(createError(err));
      });
  }
);

router.post("/sendContact", (req, res, next) => {
  // MAIL Settings
  var transport = {
    host: "smtp.example.com", // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  };

  var transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  console.log("Sending contact form");
  var name = req.body.firstName + " " + req.body.lastname;
  var email = req.body.email;
  var message = req.body.message;
  var content = `Contact from name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: email, // Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});
module.exports = router;
