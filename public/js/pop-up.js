   var r_text = new Array();
   r_text[0] = "Michael";
   r_text[1] = "Ella";
   r_text[2] = "Alice";
   r_text[3] = "Jess";
   r_text[5] = "Bodmin";
   r_text[4] = "Joshua";
   r_text[6] = "Connor";
   r_text[7] = "Joe";
   r_text[8] = "Adam";
   r_text[9] = "Sophie";


   var r_map = new Array();
   r_map[0] = "https://cryptominning.net/favicon.png";
   r_map[1] = "https://cryptominning.net/favicon.png";
   r_map[2] = "https://cryptominning.net/favicon.png";
   r_map[4] = "https://cryptominning.net/favicon.png";
   r_map[5] = "https://cryptominning.net/favicon.png";
   r_map[6] = "https://cryptominning.net/favicon.png";


   var r_product = new Array();
   r_product[0] = "South Bucks has just earned $50,560";
   r_product[1] = "Texas has just earned $34,700";
   r_product[2] = "London has just earned $20,000";
   r_product[3] = "Belgium has just earned $18,000";
   r_product[4] = "Turkey has just earned $29,000";
   r_product[5] = "Beaconsfield has just earned $87,500";
   r_product[6] = "Central Bedfordshire has just earned $200,000";
   r_product[7] = "Lostwithiel has just earned $12,000";
   setInterval(function() {
       $(".custom-social-proof").stop().slideToggle('slow');
   }, 5000);
   $(".custom-close").click(function() {
       $(".custom-social-proof").stop().slideToggle('slow');
   });
   setInterval(function() {
       var myNumber = Math.floor(7 * Math.random());
       $("#map1").attr("src", r_map[myNumber]);
       $('#country').text(r_text[myNumber]);

       $('#product').text(r_product[Math.floor(7 * Math.random())]);
       // var timeVal = Math.floor(7*Math());

       // $('#time').text(timeVal);


       //  //console.log(timeVal); 
   }, 7000);