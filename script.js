<style>
  
/* Reset */
* { margin:0; padding:0; box-sizing:border-box; font-family: 'Arial', sans-serif;}
body {background:#0d0d0d; color:#fff;}

/* Header */
header {display:flex; justify-content:space-between; align-items:center; padding:20px 40px; background:rgba(0,0,0,0.9); position:sticky; top:0; z-index:10;}
header .logo {font-size:28px; font-weight:bold; color:#ffd700; text-shadow:0 0 8px #ffd700;}
header nav a {color:#fff; margin-left:25px; text-decoration:none; transition:0.3s;}
header nav a:hover {color:#ffd700; text-shadow:0 0 5px #ffd700;}

/* Slider */
.slider {position:relative; overflow:hidden; height:500px;}
.slides {display:flex; transition:0.5s;}
.slide {position:relative; min-width:100%; height:500px; overflow:hidden;}
.slide img {width:100%; height:100%; object-fit:cover; filter: brightness(70%);}
.overlay {position:absolute; bottom:50px; left:50px; color:#ffd700; animation:fadeUp 1.5s ease-out;}
.overlay h2{font-size:36px; margin-bottom:5px;}
.overlay p{font-size:20px;}
@keyframes fadeUp {0%{opacity:0; transform:translateY(20px);}100%{opacity:1; transform:translateY(0);}}

/* Slider Nav */
.slider-nav{position:absolute; top:50%; width:100%; display:flex; justify-content:space-between; padding:0 20px; transform:translateY(-50%);}
.slider-nav span {color:#fff; font-size:28px; cursor:pointer; transition:0.3s;}
.slider-nav span:hover{color:#ffd700;}

/* Listings */
.listings {padding:60px 20px; text-align:center;}
.property-cards {display:flex; flex-wrap:wrap; justify-content:center; gap:25px;}
.card {background:#1a1a1a; width:300px; border-radius:15px; overflow:hidden; transition: transform 0.4s ease, box-shadow 0.4s ease;}
.card:hover {transform:scale(1.05); box-shadow:0 0 20px #ffd700;}
.card img{width:100%; height:200px; object-fit:cover;}
.card-info {padding:15px;}
.card-info h3{color:#ffd700; margin-bottom:5px;}
.card-info p{color:#ccc; margin-bottom:5px;}

/* Contact */
.contact {padding:60px 20px; text-align:center;}
.contact form {max-width:500px; margin:0 auto; display:flex; flex-direction:column;}
.contact input, .contact textarea {padding:12px; margin:10px 0; border:none; border-radius:8px; background:#222; color:#fff;}
.contact input::placeholder, .contact textarea::placeholder{color:#ccc;}
.contact button {padding:14px; border:none; background:#ffd700; color:#111; font-weight:bold; cursor:pointer; border-radius:8px; transition:0.3s;}
.contact button:hover{background:#e6b800;}

/* Floating icons */
.floating-icons{position:fixed; bottom:20px; right:20px; display:flex; flex-direction:column; gap:15px;}
.floating-icons a{background:#ffd700; color:#111; padding:15px; border-radius:50%; display:flex; justify-content:center; align-items:center; box-shadow:0 0 10px #ffd700; animation:pulse 2s infinite;}
@keyframes pulse{0%{transform:scale(1);}50%{transform:scale(1.1);}100%{transform:scale(1);}}

/* Footer */
footer {padding:20px; text-align:center; background:#111; color:#fff;}
</style>
