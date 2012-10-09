/**
 * Created with ShrekSrg.
 * DateTime: 12-9-27 下午2:04
 * Mobile: 13651963992
 * QQ: 284415378
 *
 */
;
var Combination = {data:{}, config:{Shelf:{}, Clapboards:{}, Accessory:{}}};
/*
 * 配置参数
 * */


Combination.config.Clapboards.dir = "products/clapboard";  //--色板路径
Combination.config.Accessory.dir = "products/accessory";  //-- 配件路径
Combination.config.isDiffrentColor = true;
Combination.config.requestURL = "do.html";
Combination.config.suffix = ".jpg";
Combination.config.suffixPng = ".png";

/*
 * 配件数据
 * */

Combination.data.Shelf = [
    {id:201, category:"shelf", name:"宽的2层空架子", levels:2, type:"broad", icon:"frameA", description:"Quattro Regal Pappel Massivholz 3er 1200x900x335 mm (BxHxT)", price:120, dir:"products/a/"},
    {id:202, category:"shelf", name:"窄的2层空架子", levels:2, type:"narrow", icon:"frameA", description:"Quattro Regal Pappel Massivholz 3er 1200x900x335 mm (BxHxT)", price:220, dir:"products/a/"},
    {id:203, category:"shelf", name:"窄的4层空架子", levels:4, type:"broad", icon:"frameB", description:"Quattro Regal Pappel Massivholz 5er 640x1660x335 mm (BxHxT)", price:420, dir:"products/b/"},
    {id:204, category:"shelf", name:"宽的4层空架子", levels:4, type:"narrow", icon:"frameB", description:"Quattro Regal Pappel Massivholz 5er 1200x1660x335 mm (BxHxT)", price:820, dir:"products/b/"}
]
;
Combination.data.Clapboards = [
    {id:2001, category:"clapboard", type:"back", name:"蓝色背板", icon:"list_blue1", color:"blue", price:20, description:"Quattro Rückpanele Lackiert Petrol 760x566x2 mm"},
    {id:2002, category:"clapboard", type:"back", name:"粉色背板", icon:"list_pink1", color:"pink", price:20, description:"Quattro Rückpanele Lackiert Pink 760x566x2 mm"},
    {id:2003, category:"clapboard", type:"back", name:"白色背板", icon:"list_white1", color:"white", price:20, description:"Quattro Rückpanele Lackiert Weiss 760x26x2 mm"},
    {id:2004, category:"clapboard", type:"back", name:"棕色背板", icon:"list_brown1", color:"brown", price:20, description:"Quattro Rückpanele MDF unbehandelt 760x566x2 mm"},
    {id:2005, category:"clapboard", type:"back", name:"绿色背板", icon:"list_green1", color:"green", price:20, description:"Quattro Rückpanele Lackiert Grün 760x566x2 mm"},
    {id:2101, category:"clapboard", type:"side", name:"蓝色侧板", icon:"list_blue2", color:"blue", price:20, description:"Quattro Paar Seitenpanelen Lackiert Petrol 760x261x2 mm"},
    {id:2102, category:"clapboard", type:"side", name:"粉色侧板", icon:"list_pink2", color:"pink", price:20, description:"Quattro Paar Seitenpanelen Lackiert Pink 760x261x2 mm"},
    {id:2103, category:"clapboard", type:"side", name:"白色侧板", icon:"list_white2", color:"white", price:20, description:"Quattro Paar Seitenpanelen Lackiert Weiss 760x566x2 mm"},
    {id:2104, category:"clapboard", type:"side", name:"棕色侧板", icon:"list_brown2", color:"brown", price:20, description:"Quattro Paar Seitenpanelen MDF unbehadelt 760x26x2 mm"},
    {id:2105, category:"clapboard", type:"side", name:"绿色侧板", icon:"list_green2", color:"green", price:20, description:"Quattro Paar Seitenpanelen Lackiert Grün 760x261x2 mm"}
];

Combination.data.Accessories = [
    {id:2201, category:"accessory", name:"木门(窄)", icon:"door", type:"door", size:"narrow", price:20, tier:0, description:"Quattro Paar Türen Pappel Massivholz fuer 640 mm breite Regalen"},
    {id:2202, category:"accessory", name:"木门(宽)", icon:"door", type:"door", size:"broad", price:20, tier:0, description:"Quattro Paar Türen Pappel Massivholz fuer 1200 mm breite Regalen"},
    {id:2203, category:"accessory", name:"抽屉(窄)", icon:"drawer", type:"drawer", size:"narrow", price:20, tier:0, description:"Quattro Paar Schubladen Pappel Massivholz fuer 640 mm breite Regalen"},
    {id:2204, category:"accessory", name:"抽屉(宽)", icon:"drawer", type:"drawer", size:"broad", price:20, tier:0, description:"Quattro Paar Schubladen Pappel Massivholz fuer 1200 mm breite Regalen"},
    {id:2205, category:"accessory", name:"玻璃板", icon:"glass", type:"glass", price:20, tier:0, description:"Quattro Glastür 760x555 mm"}
]
;