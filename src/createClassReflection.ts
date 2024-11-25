export function createClassReflection(): any {

    const className = process.env.CLASS_NAME;
    if (!className) {
      throw new Error("CLASS_NAME n'est pas configuré.");
    }

    const module = require(`./${className}`);
    const ClassRef = module[className];
    
  
    if (!ClassRef) {
      throw new Error("Class ${className} non trouvé.");
    }
  

    return new ClassRef();
  }
  