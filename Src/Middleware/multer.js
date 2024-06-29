import multer from 'multer'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const upload = multer({  
  storage : multer.diskStorage({
        destination: function (req, file, cb) {
        
          const url= '/src/public'
          console.log(url,'avatar')
            cb(null,url)        
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          const fileExtension = path.extname(file.originalname);
          cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
      }    
      }) ,
            
 })
  
export {upload}
  