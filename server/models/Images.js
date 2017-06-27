 import { property, graphQl } from '@graphite/decorators';

 @graphQl
 class Image {
   @property('String')
   height;

   @property('String')
   width;

   @property('String')
   url
 }

 export default new Image();
