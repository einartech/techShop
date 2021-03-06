const express = require('express')
const router = express.Router();

//Connect with the Controllers
const{  getProducts,
        newProduct,
        getSingleProduct,
        updateProduct,
        deleteProduct
     } = require('../controllers/productController')

const { isAuthenticatedUser,authorizeRoles  }=require('../middlewares/auth')

//Route Data
router.route('/products').get(isAuthenticatedUser,getProducts);
router.route('/product/:id').get(getSingleProduct);

//ADMIN ZONE
router.route('/admin/product/new').post(isAuthenticatedUser,authorizeRoles('admin'),newProduct);

//Route Action
router.route('/admin/product/:id')
                                    .put(isAuthenticatedUser,authorizeRoles('admin'),updateProduct)
                                    .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteProduct);




module.exports = router;