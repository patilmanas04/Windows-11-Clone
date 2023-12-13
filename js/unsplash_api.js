let url1 = "https://api.unsplash.com/search/photos?orientation=squarish&page=1&per_page=13&query=Nature&client_id=HB6DnSO4g5aZ4oHbaFwFK5IZUareL-qF5kuq8VuGwZk";

// AJAX Request
let squareImageAJAXCall = new XMLHttpRequest();
squareImageAJAXCall.open('GET', url1);
squareImageAJAXCall.send();

squareImageAJAXCall.addEventListener("load", function(e){
    // console.log(e.target.response);
    let data = e.target.response;
    let response = JSON.parse(data);
    console.log(response);

    add_squarish_images(response);
});

function add_squarish_images(response){
    // console.log(response.results[0].urls.regular);
    let news_box_divs = document.getElementsByClassName("news-box");

    for(i=0 ; i<13 ; i++){
        if(i!=2 && i!=7 && i!=12){
            let image_url = response.results[i].urls.small;
            news_box_divs[i].innerHTML = "<img src='"+ image_url +"'>";
        }
    }
}














let url2 = "https://api.unsplash.com/search/photos?orientation=landscape&page=2&per_page=13&query=Nature&client_id=HB6DnSO4g5aZ4oHbaFwFK5IZUareL-qF5kuq8VuGwZk";

// AJAX Request
let landscapeImageAJAXCall = new XMLHttpRequest();
landscapeImageAJAXCall.open('GET', url2);
landscapeImageAJAXCall.send();

landscapeImageAJAXCall.addEventListener("load", function(e){
    // console.log(e.target.response);
    let data = e.target.response;
    let response = JSON.parse(data);
    console.log(response);

    add_landscape_images(response);
});

function add_landscape_images(response){
    // console.log(response.results[0].urls.regular);
    let news_box_divs = document.getElementsByClassName("news-box");

    for(i=0 ; i<13 ; i++){
        if(i==2 || i==7 || i==12){
            let image_url = response.results[i].urls.small;
            news_box_divs[i].innerHTML = "<img src='"+ image_url +"'>";
        }
    }
}





