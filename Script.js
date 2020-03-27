// JavaScript Function Handling button colors

var canvas;
var wait_button;
var draw_area;

function on_start(){
    draw_area = document.getElementById("draw_area");
    wait_button = document.getElementById("wait");
    console.log("Page has started");
}

function bar_items(width,height,x,y,value){
    this.value=value
    this.y=y;
    this.x=x;
    this.width=width;
    this.height=height;
}

function button_click(button_element){
    // get all elements and turn them not active:
    var all_buttons = document.getElementsByClassName("brk-btn");  

    for (let obj of all_buttons){
       // console.log(obj);
        if(obj.classList.contains("active_button")){
            obj.classList.remove("active_button");
        }
    }
    button_element.classList.add("active_button");
    if(button_element.name=="Selection"){
        forced_wait();
    }
}

// esthathic design
function forced_wait(){
    //- If waitbutton is hidden-> show the wait button
    svg_hide();
}

function svg_hide()
{
    if(draw_area.classList.contains("show")){
        draw_area.classList.remove("show");
        draw_area.classList.remove("visible");
        draw_area.classList.add("hide");
    }
    wait_show(wait_hide);
}

function wait_show(callback)
{
    if(wait_button.classList.contains("hide")){
        wait_button.classList.remove("hide");
        wait_button.classList.add("visible");
    }
    // -- [ Adds fade in effect] -- //
    setTimeout(function(){
        wait_button.classList.add("show");
    }, 300);

    setTimeout(function(){
        callback(svg_show);
    }, 3000);
}

function wait_hide(callback)
{
    if(draw_area.classList.contains("hide")){
        wait_button.classList.remove("visible");
        wait_button.classList.remove("show");
        wait_button.classList.add("hide");


        draw_area.classList.remove("hide");
        draw_area.classList.add("visible");
    }
    setTimeout(function(){
        callback(selection_sort);
    }, 300);

}

function canvas_show(callback){
    
    wait_button.classList.remove("visible");
    wait_button.classList.remove("show");
    wait_button.classList.add("hide")

    draw_area.classList.add("show");
    setTimeout(function(){
        callback();
    }, 300);
}

// translate -400 makes sure its more left leaning
// rect transform 
function svg_show(){
    draw_area.innerHTML=
        '<path transform="translate(-400,0)" xmlns="http://www.w3.org/2000/svg" d="M49.3535 12.6465C49.1583 12.4512 48.8417 12.4512 48.6464 12.6465L45.4644 15.8284C45.2692 16.0237 45.2692 16.3403 45.4644 16.5355C45.6597 16.7308 45.9763 16.7308 46.1716 16.5355L49 13.7071L51.8284 16.5355C52.0237 16.7308 52.3403 16.7308 52.5355 16.5355C52.7308 16.3403 52.7308 16.0237 52.5355 15.8284L49.3535 12.6465ZM49.5 410L49.5 13L48.5 13L48.5 410L49.5 410Z" fill="black"/>'
        +'<path transform="translate(-400,0)" xmlns="http://www.w3.org/2000/svg" d="M1399.35 410.354C1399.55 410.158 1399.55 409.842 1399.35 409.646L1396.17 406.464C1395.98 406.269 1395.66 406.269 1395.46 406.464C1395.27 406.66 1395.27 406.976 1395.46 407.172L1398.29 410L1395.46 412.828C1395.27 413.024 1395.27 413.34 1395.46 413.536C1395.66 413.731 1395.98 413.731 1396.17 413.536L1399.35 410.354ZM49 410.5H1399V409.5H49V410.5Z" fill="black"/>'
        +'<path transform="translate(-400,0)" d="M187.402 433.547H180.254L178.648 438H176.328L182.844 420.938H184.812L191.34 438H189.031L187.402 433.547ZM180.934 431.695H186.734L183.828 423.715L180.934 431.695ZM199.426 427.266C199.098 427.211 198.742 427.184 198.359 427.184C196.938 427.184 195.973 427.789 195.465 429V438H193.297V425.32H195.406L195.441 426.785C196.152 425.652 197.16 425.086 198.465 425.086C198.887 425.086 199.207 425.141 199.426 425.25V427.266ZM207.559 427.266C207.23 427.211 206.875 427.184 206.492 427.184C205.07 427.184 204.105 427.789 203.598 429V438H201.43V425.32H203.539L203.574 426.785C204.285 425.652 205.293 425.086 206.598 425.086C207.02 425.086 207.34 425.141 207.559 425.25V427.266ZM216.922 438C216.797 437.75 216.695 437.305 216.617 436.664C215.609 437.711 214.406 438.234 213.008 438.234C211.758 438.234 210.73 437.883 209.926 437.18C209.129 436.469 208.73 435.57 208.73 434.484C208.73 433.164 209.23 432.141 210.23 431.414C211.238 430.68 212.652 430.312 214.473 430.312H216.582V429.316C216.582 428.559 216.355 427.957 215.902 427.512C215.449 427.059 214.781 426.832 213.898 426.832C213.125 426.832 212.477 427.027 211.953 427.418C211.43 427.809 211.168 428.281 211.168 428.836H208.988C208.988 428.203 209.211 427.594 209.656 427.008C210.109 426.414 210.719 425.945 211.484 425.602C212.258 425.258 213.105 425.086 214.027 425.086C215.488 425.086 216.633 425.453 217.461 426.188C218.289 426.914 218.719 427.918 218.75 429.199V435.035C218.75 436.199 218.898 437.125 219.195 437.812V438H216.922ZM213.324 436.348C214.004 436.348 214.648 436.172 215.258 435.82C215.867 435.469 216.309 435.012 216.582 434.449V431.848H214.883C212.227 431.848 210.898 432.625 210.898 434.18C210.898 434.859 211.125 435.391 211.578 435.773C212.031 436.156 212.613 436.348 213.324 436.348ZM226.109 434.824L229.062 425.32H231.383L226.285 439.957C225.496 442.066 224.242 443.121 222.523 443.121L222.113 443.086L221.305 442.934V441.176L221.891 441.223C222.625 441.223 223.195 441.074 223.602 440.777C224.016 440.48 224.355 439.938 224.621 439.148L225.102 437.859L220.578 425.32H222.945L226.109 434.824ZM242.035 438H239.785V420.938H242.035V438ZM247.871 425.32L247.941 426.914C248.91 425.695 250.176 425.086 251.738 425.086C254.418 425.086 255.77 426.598 255.793 429.621V438H253.625V429.609C253.617 428.695 253.406 428.02 252.992 427.582C252.586 427.145 251.949 426.926 251.082 426.926C250.379 426.926 249.762 427.113 249.23 427.488C248.699 427.863 248.285 428.355 247.988 428.965V438H245.82V425.32H247.871ZM258.535 431.555C258.535 429.609 258.996 428.047 259.918 426.867C260.84 425.68 262.047 425.086 263.539 425.086C265.023 425.086 266.199 425.594 267.066 426.609V420H269.234V438H267.242L267.137 436.641C266.27 437.703 265.062 438.234 263.516 438.234C262.047 438.234 260.848 437.633 259.918 436.43C258.996 435.227 258.535 433.656 258.535 431.719V431.555ZM260.703 431.801C260.703 433.238 261 434.363 261.594 435.176C262.188 435.988 263.008 436.395 264.055 436.395C265.43 436.395 266.434 435.777 267.066 434.543V428.719C266.418 427.523 265.422 426.926 264.078 426.926C263.016 426.926 262.188 427.336 261.594 428.156C261 428.977 260.703 430.191 260.703 431.801ZM277.871 438.234C276.152 438.234 274.754 437.672 273.676 436.547C272.598 435.414 272.059 433.902 272.059 432.012V431.613C272.059 430.355 272.297 429.234 272.773 428.25C273.258 427.258 273.93 426.484 274.789 425.93C275.656 425.367 276.594 425.086 277.602 425.086C279.25 425.086 280.531 425.629 281.445 426.715C282.359 427.801 282.816 429.355 282.816 431.379V432.281H274.227C274.258 433.531 274.621 434.543 275.316 435.316C276.02 436.082 276.91 436.465 277.988 436.465C278.754 436.465 279.402 436.309 279.934 435.996C280.465 435.684 280.93 435.27 281.328 434.754L282.652 435.785C281.59 437.418 279.996 438.234 277.871 438.234ZM277.602 426.867C276.727 426.867 275.992 427.188 275.398 427.828C274.805 428.461 274.438 429.352 274.297 430.5H280.648V430.336C280.586 429.234 280.289 428.383 279.758 427.781C279.227 427.172 278.508 426.867 277.602 426.867ZM289.59 429.949L292.402 425.32H294.934L290.785 431.59L295.062 438H292.555L289.625 433.254L286.695 438H284.176L288.453 431.59L284.305 425.32H286.812L289.59 429.949ZM303.125 436.863C303.125 436.488 303.234 436.176 303.453 435.926C303.68 435.676 304.016 435.551 304.461 435.551C304.906 435.551 305.242 435.676 305.469 435.926C305.703 436.176 305.82 436.488 305.82 436.863C305.82 437.223 305.703 437.523 305.469 437.766C305.242 438.008 304.906 438.129 304.461 438.129C304.016 438.129 303.68 438.008 303.453 437.766C303.234 437.523 303.125 437.223 303.125 436.863ZM303.137 426.516C303.137 426.141 303.246 425.828 303.465 425.578C303.691 425.328 304.027 425.203 304.473 425.203C304.918 425.203 305.254 425.328 305.48 425.578C305.715 425.828 305.832 426.141 305.832 426.516C305.832 426.875 305.715 427.176 305.48 427.418C305.254 427.66 304.918 427.781 304.473 427.781C304.027 427.781 303.691 427.66 303.465 427.418C303.246 427.176 303.137 426.875 303.137 426.516ZM317.012 425.32L317.082 426.914C318.051 425.695 319.316 425.086 320.879 425.086C323.559 425.086 324.91 426.598 324.934 429.621V438H322.766V429.609C322.758 428.695 322.547 428.02 322.133 427.582C321.727 427.145 321.09 426.926 320.223 426.926C319.52 426.926 318.902 427.113 318.371 427.488C317.84 427.863 317.426 428.355 317.129 428.965V438H314.961V425.32H317.012Z" fill="black"/>'
        +'<path transform="translate(-400,0)" d="M22 305.605L22 307.855L4.9375 307.855L4.9375 305.605L22 305.605ZM9.32031 299.77L10.9141 299.699C9.69531 298.73 9.08594 297.465 9.08594 295.902C9.08594 293.223 10.5977 291.871 13.6211 291.848L22 291.848L22 294.016L13.6094 294.016C12.6953 294.023 12.0195 294.234 11.582 294.648C11.1445 295.055 10.9258 295.691 10.9258 296.559C10.9258 297.262 11.1133 297.879 11.4883 298.41C11.8633 298.941 12.3555 299.355 12.9648 299.652L22 299.652L22 301.82L9.32031 301.82L9.32031 299.77ZM15.5547 289.105C13.6094 289.105 12.0469 288.645 10.8672 287.723C9.67969 286.801 9.08594 285.594 9.08594 284.102C9.08594 282.617 9.59375 281.441 10.6094 280.574L4 280.574L4 278.406L22 278.406L22 280.398L20.6406 280.504C21.7031 281.371 22.2344 282.578 22.2344 284.125C22.2344 285.594 21.6328 286.793 20.4297 287.723C19.2266 288.645 17.6562 289.105 15.7187 289.105L15.5547 289.105ZM15.8008 286.937C17.2383 286.937 18.3633 286.641 19.1758 286.047C19.9883 285.453 20.3945 284.633 20.3945 283.586C20.3945 282.211 19.7773 281.207 18.543 280.574L12.7187 280.574C11.5234 281.223 10.9258 282.219 10.9258 283.562C10.9258 284.625 11.3359 285.453 12.1562 286.047C12.9766 286.641 14.1914 286.937 15.8008 286.937ZM22.2344 269.77C22.2344 271.488 21.6719 272.887 20.5469 273.965C19.4141 275.043 17.9023 275.582 16.0117 275.582L15.6133 275.582C14.3555 275.582 13.2344 275.344 12.25 274.867C11.2578 274.383 10.4844 273.711 9.92969 272.852C9.36719 271.984 9.08594 271.047 9.08594 270.039C9.08594 268.391 9.6289 267.109 10.7148 266.195C11.8008 265.281 13.3555 264.824 15.3789 264.824L16.2812 264.824L16.2812 273.414C17.5312 273.383 18.543 273.02 19.3164 272.324C20.082 271.621 20.4648 270.73 20.4648 269.652C20.4648 268.887 20.3086 268.238 19.9961 267.707C19.6836 267.176 19.2695 266.711 18.7539 266.312L19.7852 264.988C21.418 266.051 22.2344 267.645 22.2344 269.77ZM10.8672 270.039C10.8672 270.914 11.1875 271.648 11.8281 272.242C12.4609 272.836 13.3516 273.203 14.5 273.344L14.5 266.992L14.3359 266.992C13.2344 267.055 12.3828 267.352 11.7812 267.883C11.1719 268.414 10.8672 269.133 10.8672 270.039ZM13.9492 258.051L9.32031 255.238L9.32031 252.707L15.5898 256.855L22 252.578L22 255.086L17.2539 258.016L22 260.945L22 263.465L15.5898 259.187L9.32031 263.336L9.32031 260.828L13.9492 258.051ZM19.0117 238.457L4.9375 233.582L4.9375 231.121L22 237.449L22 239.441L4.9375 245.758L4.9375 243.309L19.0117 238.457ZM22 221.875C21.75 222 21.3047 222.102 20.6641 222.18C21.7109 223.187 22.2344 224.391 22.2344 225.789C22.2344 227.039 21.8828 228.066 21.1797 228.871C20.4687 229.668 19.5703 230.066 18.4844 230.066C17.1641 230.066 16.1406 229.566 15.4141 228.566C14.6797 227.559 14.3125 226.145 14.3125 224.324L14.3125 222.215L13.3164 222.215C12.5586 222.215 11.957 222.441 11.5117 222.895C11.0586 223.348 10.832 224.016 10.832 224.898C10.832 225.672 11.0273 226.32 11.418 226.844C11.8086 227.367 12.2812 227.629 12.8359 227.629L12.8359 229.809C12.2031 229.809 11.5937 229.586 11.0078 229.141C10.4141 228.687 9.94531 228.078 9.60156 227.312C9.25781 226.539 9.08593 225.691 9.08593 224.77C9.08593 223.309 9.45312 222.164 10.1875 221.336C10.9141 220.508 11.918 220.078 13.1992 220.047L19.0352 220.047C20.1992 220.047 21.125 219.898 21.8125 219.602L22 219.602L22 221.875ZM20.3477 225.473C20.3477 224.793 20.1719 224.148 19.8203 223.539C19.4687 222.93 19.0117 222.488 18.4492 222.215L15.8477 222.215L15.8477 223.914C15.8477 226.57 16.625 227.898 18.1797 227.898C18.8594 227.898 19.3906 227.672 19.7734 227.219C20.1562 226.766 20.3477 226.184 20.3477 225.473ZM22 214.293L22 216.461L4 216.461L4 214.293L22 214.293ZM20.7461 202.984C21.7383 203.828 22.2344 205.066 22.2344 206.699C22.2344 208.051 21.8437 209.082 21.0625 209.793C20.2734 210.496 19.1094 210.852 17.5703 210.859L9.32031 210.859L9.32031 208.691L17.5117 208.691C19.4336 208.691 20.3945 207.91 20.3945 206.348C20.3945 204.691 19.7773 203.59 18.543 203.043L9.32031 203.043L9.32031 200.875L22 200.875L22 202.937L20.7461 202.984ZM22.2344 192.309C22.2344 194.027 21.6719 195.426 20.5469 196.504C19.4141 197.582 17.9023 198.121 16.0117 198.121L15.6133 198.121C14.3555 198.121 13.2344 197.883 12.25 197.406C11.2578 196.922 10.4844 196.25 9.92968 195.391C9.36718 194.523 9.08593 193.586 9.08593 192.578C9.08593 190.93 9.6289 189.648 10.7148 188.734C11.8008 187.82 13.3555 187.363 15.3789 187.363L16.2812 187.363L16.2812 195.953C17.5312 195.922 18.543 195.559 19.3164 194.863C20.082 194.16 20.4648 193.27 20.4648 192.191C20.4648 191.426 20.3086 190.777 19.9961 190.246C19.6836 189.715 19.2695 189.25 18.7539 188.852L19.7852 187.527C21.418 188.59 22.2344 190.184 22.2344 192.309ZM10.8672 192.578C10.8672 193.453 11.1875 194.187 11.8281 194.781C12.4609 195.375 13.3516 195.742 14.5 195.883L14.5 189.531L14.3359 189.531C13.2344 189.594 12.3828 189.891 11.7812 190.422C11.1719 190.953 10.8672 191.672 10.8672 192.578ZM20.8633 178.961C20.4883 178.961 20.1758 178.852 19.9258 178.633C19.6758 178.406 19.5508 178.07 19.5508 177.625C19.5508 177.18 19.6758 176.844 19.9258 176.617C20.1758 176.383 20.4883 176.266 20.8633 176.266C21.2227 176.266 21.5234 176.383 21.7656 176.617C22.0078 176.844 22.1289 177.18 22.1289 177.625C22.1289 178.07 22.0078 178.406 21.7656 178.633C21.5234 178.852 21.2227 178.961 20.8633 178.961ZM10.5156 178.949C10.1406 178.949 9.82812 178.84 9.57812 178.621C9.32812 178.395 9.20312 178.059 9.20312 177.613C9.20312 177.168 9.32812 176.832 9.57812 176.605C9.82812 176.371 10.1406 176.254 10.5156 176.254C10.875 176.254 11.1758 176.371 11.418 176.605C11.6602 176.832 11.7812 177.168 11.7812 177.613C11.7812 178.059 11.6602 178.395 11.418 178.621C11.1758 178.84 10.875 178.949 10.5156 178.949ZM22 159.297C21.75 159.422 21.3047 159.523 20.6641 159.602C21.7109 160.609 22.2344 161.812 22.2344 163.211C22.2344 164.461 21.8828 165.488 21.1797 166.293C20.4687 167.09 19.5703 167.488 18.4844 167.488C17.1641 167.488 16.1406 166.988 15.4141 165.988C14.6797 164.98 14.3125 163.566 14.3125 161.746L14.3125 159.637L13.3164 159.637C12.5586 159.637 11.957 159.863 11.5117 160.316C11.0586 160.77 10.832 161.437 10.832 162.32C10.832 163.094 11.0273 163.742 11.418 164.266C11.8086 164.789 12.2812 165.051 12.8359 165.051L12.8359 167.23C12.2031 167.23 11.5937 167.008 11.0078 166.562C10.4141 166.109 9.94531 165.5 9.60156 164.734C9.25781 163.961 9.08593 163.113 9.08593 162.191C9.08593 160.73 9.45312 159.586 10.1875 158.758C10.9141 157.93 11.918 157.5 13.1992 157.469L19.0351 157.469C20.1992 157.469 21.125 157.32 21.8125 157.023L22 157.023L22 159.297ZM20.3476 162.895C20.3476 162.215 20.1719 161.57 19.8203 160.961C19.4687 160.352 19.0117 159.91 18.4492 159.637L15.8476 159.637L15.8476 161.336C15.8476 163.992 16.625 165.32 18.1797 165.32C18.8594 165.32 19.3906 165.094 19.7734 164.641C20.1562 164.187 20.3476 163.605 20.3476 162.895ZM11.2656 147.941C11.2109 148.27 11.1836 148.625 11.1836 149.008C11.1836 150.43 11.7891 151.395 13 151.902L22 151.902L22 154.07L9.32031 154.07L9.32031 151.961L10.7851 151.926C9.65234 151.215 9.08593 150.207 9.08593 148.902C9.08593 148.48 9.14062 148.16 9.24999 147.941L11.2656 147.941ZM11.2656 139.809C11.2109 140.137 11.1836 140.492 11.1836 140.875C11.1836 142.297 11.7891 143.262 13 143.77L22 143.77L22 145.937L9.32031 145.937L9.32031 143.828L10.7851 143.793C9.65234 143.082 9.08593 142.074 9.08593 140.77C9.08593 140.348 9.14062 140.027 9.24999 139.809L11.2656 139.809ZM15.0742 137.887C13.3086 137.887 11.6133 137.652 9.98827 137.184C8.36327 136.707 6.88671 136 5.55859 135.062C4.23046 134.125 3.29296 133.152 2.74609 132.145L4.17577 131.699C5.05077 132.84 6.38671 133.777 8.18359 134.512C9.98046 135.238 11.9922 135.637 14.2187 135.707L15.2148 135.719C18.2305 135.719 20.8476 135.168 23.0664 134.066C24.3945 133.402 25.4336 132.613 26.1836 131.699L27.5078 132.145C26.9297 133.184 25.9609 134.176 24.6016 135.121C21.9453 136.965 18.7695 137.887 15.0742 137.887ZM9.3203 127.551L10.9141 127.48C9.6953 126.512 9.08593 125.246 9.08593 123.684C9.08593 121.004 10.5976 119.652 13.6211 119.629L22 119.629L22 121.797L13.6094 121.797C12.6953 121.805 12.0195 122.016 11.582 122.43C11.1445 122.836 10.9258 123.473 10.9258 124.34C10.9258 125.043 11.1133 125.66 11.4883 126.191C11.8633 126.723 12.3555 127.137 12.9648 127.434L22 127.434L22 129.602L9.3203 129.602L9.3203 127.551ZM15.1914 111.355C16.9336 111.355 18.6055 111.586 20.207 112.047C21.8008 112.5 23.2734 113.199 24.625 114.145C25.9766 115.082 26.9375 116.066 27.5078 117.098L26.1836 117.555C25.2617 116.352 23.832 115.387 21.8945 114.66C19.9492 113.926 17.793 113.551 15.4258 113.535L15.0508 113.535C13.4101 113.535 11.8867 113.707 10.4805 114.051C9.0664 114.395 7.80077 114.875 6.68359 115.492C5.5664 116.102 4.6953 116.789 4.0703 117.555L2.74609 117.098C3.3164 116.066 4.26952 115.086 5.60546 114.156C6.9414 113.219 8.41405 112.52 10.0234 112.059C11.6328 111.59 13.3555 111.355 15.1914 111.355Z" fill="black"/>'
        +'<rect transform="translate(-400,0)" x="77.5" y="392.5" width="21" height="17" fill="#F1ABFC" stroke="black"/>';
        draw_area.classList.add("show");
        sort_intantiate();
}

function sort_intantiate(){
    let bars=[];
    let numbers=[];
    var middle= 1;
    for(var i = 1;i<=20;i++){
        numbers.push(i);
    }

    //randomize 

    numbers.sort(function() { return 0.5 - Math.random() });

    for(var i = 0;i<numbers.length;i++){
        bars.push(new bar_items(21,17*numbers[i],(77.5+(30*(i+1))),400,numbers[i]));
    }

    console.log(bars);

    svg_draw(bars);
}

// Changing from normal draw to svg draw as svg draw retains references. 
function svg_draw(arr)
{
    var obj;
    for (var i = 0;i<arr.length;i++){
        obj=arr[i];
        var y_translation=-(17*obj.value-17);;
        var added_object = '<rect id = "bar'+obj.value+'" class = "svg_bar" transform="translate(-400,'+y_translation+')" x=' + '"'+obj.x+'"'+' y="392.5" width="21" height=' + '"'+obj.height+'"'+' fill="#F1ABFC" stroke="black"><title>'+obj.value+'</title></rect>'
        draw_area.innerHTML=draw_area.innerHTML+added_object;
    }
}

/* All Sorting Algorithms start here */

function select_sort(arr){
    var minimum_index;
    for(var i = 0;i<arr.length;i++){
        minimum_index=i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[minimum_index].value>arr[j].value){
                minimum_index=j;
            }
        }   
        //Once index minimum is figured, swap
        var temp = arr[i];
        arr[i]=arr[minimum_index];
        arr[minimum_index]=temp;
        visual_swap(arr[i],arr[minimum_index]);
    }
}

// Recieves two object bars and swaps them visually
function visual_swap(A,B){
    var bar_A = document.getElementById("bar"+A.value);
    var bar_B = document.getElementById("bar"+B.value);

    //translation here
}




// Need to figure out a way to make the array grow with it
// easiest way it to have a function that grows the grid div and the draw_area
// Use the object to save the values of x and y with the translations
// give each svg an id and class 
