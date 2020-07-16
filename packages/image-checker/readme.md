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


## Usage

```js
❯ node downloadImageXMLFromWebDav.js --help
Usage: node downloadImageXMLFromWebDav.js

Options:
  --version   Show version number  [boolean]
  -h, --help  Show help  [boolean]

Examples:
  node downloadImageXMLFromWebDav.js  Download the server xml using propfind request
```

```js
❯ node findImagesNotInUse.js --help
Usage: findImagesNotInUse.js [options]

Options:
  --version            Show version number  [boolean]
  -c, --catalogxml     Path to SFCC master catalog XML  [string] [required]
  -s, --serverxml      Path to sever XML file, generated using PROPFIND request to WEBDAV  [string] [required]
  --fname, --filename  Name of the file(with extension(CSV)) to which orphaned images will be written  [required] [default: "images_not_in_use.csv"]
  -h, --help           Show help  [boolean]

Examples:
  findImagesNotInUse.js --catalogxml /path/to/catalog.xml --serverxml /path/to/serverfile.xml --fname images_not_in_use.csv  Find images which are referenced in master catalog but not longer in use.
```

```js
❯ node findProductsWithoutImages.js --help
Usage: findProductsWithoutImages.js [options]

Options:
  --version            Show version number  [boolean]
  -c, --catalogxml     Path to SFCC master catalog XML  [string] [required]
  -s, --serverxml      Path to sever XML file, generated using PROPFIND request to WEBDAV  [string] [required]
  --fname, --filename  Name of the file(with extension(CSV)) to which product without images will be written  [required] [default: "product_without_images.csv"]
  -h, --help           Show help  [boolean]

Examples:
  findProductsWithoutImages.js --catalogxml /path/to/catalog.xml --serverxml /path/to/serverfile.xml --fname product_without_images.csv  Find products with missing images & the images attached to that product
```
