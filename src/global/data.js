export const filterData = [{name:'Fast food',image: require('../Images/fastfood.png'),id:'0'},
                            {name:'Noodles',image: require('../Images/noodles.png'),id:'1'},
                            {name:'Vegetables',image: require('../Images/vegs.png'),id:'2'},
                            {name:'Sea Food',image: require('../Images/seafood.png'),id:'3'},
                            {name:'Bread',image: require('../Images/bread.png'),id:'4'},
                            {name:'Fruits',image: require('../Images/fruits.png'),id:'5'}];

export const restaurantData = [{
    restaurantName:"Mc Donalds",farAway:"21.2",
    businessAddress:"22 Bessie Street",images:'https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',averageReview:4.1,numberOfReview:288,
    coordinates:{lat: -26.1888612, lng:28.246325}, discount:10,deliveyTime:15,
    collectTime:5,foodType:"Burgers,wraps, milkshakes...",
    productData:[
    {name:"Hand cut chips", price:29.30,image:"https://unsplash.com/photos/wqyanQ8ibTE"},
    {name:"Big mac", price:50.80,image:"https"},
    {name:"Chicken Burger", price:70,image:"https"}],id:0},

    {restaurantName:"KFC",farAway:"12.7",
    businessAddress:"22 Bessie Street",images:"https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",averageReview:4.3,numberOfReview:306,
    coordinates:{lat: -26.1891648, lng:28.2441808}, discount:20,deliveyTime:30,
    collectTime:10,foodType:"Chicken, Chicken wings...",
    productData:[
    {name:"Hand cut chips", price:29.30,image:"https"},
    {name:"Big mac", price:50.80,image:"https"},
    {name:"Chicken Burger", price:70,image:"https"}],id:1},

    {restaurantName:"STEERS",farAway:"5",
    businessAddress:"17 olivia Rd, Johannesburg",images:"https://images.unsplash.com/photo-1642616128754-7d026f979317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",averageReview:4.9,numberOfReview:1272,
    coordinates:{lat: -26.1891648, lng:28.244879}, discount:12,deliveyTime:25,
    collectTime:15,foodType:"Flame grilled beef burgers",
    productData:[
    {name:"Hand cut chips", price:29.30,image:"https"},
    {name:"Big mac", price:50.80,image:"https"},
    {name:"Chicken Burger", price:70,image:"https"}],id:2},

    {restaurantName:"Roman Pizza",farAway:"7",
    businessAddress:"15 Atlas Rd, Kempton Park",images:"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",averageReview:4.3,numberOfReview:700,
    coordinates:{lat: -26.1845336, lng:28.2481691}, discount:null,deliveyTime:20,
    collectTime:10,foodType:"Chicken pizza, Vegetarian pizza...",
    productData:[
    {name:"Hand cut chips", price:29.30,image:"https"},
    {name:"Big mac", price:50.80,image:"https"},
    {name:"Chicken Burger", price:70,image:"https"}],id:3},
]