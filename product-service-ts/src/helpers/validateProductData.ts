import { Product } from "src/types/product";

export const validatePoductData = (productDataDto: Product) => {
    const { title, description, price, imageid, count } = productDataDto;
  
    if(!title || typeof title !== 'string') {
      return {validation_error: `'title' is empty or not valid!`};
    }
  
    if(!description || typeof description !== 'string') {
      return {validation_error: `'description' is empty or not valid!`};
    }
  
    if(!price || typeof price !== 'number') {
      return {validation_error: `'price' is empty or not valid!`};
    }
  
    if(!imageid || typeof imageid !== 'string') {
      return {validation_error: `'imageid' is empty or not valid!`};
    }
  
    if(!count || typeof count !== 'number') {
      return {validation_error: `'count' is empty or not valid!`};
    }
  
    return {validation_error: false};
  };