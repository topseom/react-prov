
let site;
export const initApp = ({site}) =>{
    localStorage.setItem("site",site);
}

export const getSite = ()=>{
    return new Promise((resolve,reject)=>{
        let site = localStorage.getItem("site");
        resolve(site);
    });
    
}


export default initApp;