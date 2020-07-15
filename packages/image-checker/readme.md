`image-checker` utility is used to perform following tasks:

1. Find Images in webdav which are not being referenced by any products.

2. Find products which have no or incomplete images i.e. the image mapping exist in master-catalog but the image doesn't exist in webdav.

# How does it work?

## Find Images not in use (findImagesNotInUse.js)

Finding images not in use is a two-step process. Firstly, run `downloadImageXMLFromWebDav.js` to download the xml representation of webdav 
`/images/` folder. This is done by initiating a PROPFIND request to SFCC server.

Once, the xml representation is successfully downloaded, run `findImagesNotInUse.js` to find the un-used images. 

This script initially creates an object-mapping of all the image paths present in master catalog. After the mapping is created, it reads the `href` tag in server xml & checks the href against the object-mapping. If the image path doesn't exist in mapping write it to a CSV file.


## Find products with missing images (findProductsWithoutImages.js)

Finding products with missing images is a two-step process. Firstly, run `downloadImageXMLFromWebDav.js` to download the xml representation of webdav `/images/` folder. This is done by initiating a PROPFIND request to SFCC server.

Once, the xml representation is successfully downloaded, run `c.js` to find products with missing images.

This script initially creates an object-mapping of all the image urls present in xml representation of webdav. After the mapping is created, it reads the `<image></image>` tag in master-catalog & checks the image-path against the object-mapping. If image doesn't exist in mapping,image & pid is written to a CSV file.
