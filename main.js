jQuery(function() {
  changeDistrict({value: "010100"})
});

// jquery plug in to insert commas into numbers of 4+ digits (I hope)
$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}

// jquery associating values from the schools object to corresponding html element id
function changeDistrict(select) {
  var district = schools[select.value];
  jQuery("#2017-18-foundation-aid").html("$" + district[1]).digits();
  jQuery("#2017-18-high-tax-aid").html("$" + district[2]).digits();
  jQuery("#2017-18-Reorganization-Incentive-Operating-Aid").html("$" + district[3]).digits();
  jQuery("#2017-18-Academic-Enhancement-Aid").html("$" + district[4]).digits();
  jQuery("#2017-18-Building-Aid").html("$" + district[5]).digits();
  jQuery("#2017-18-Reorg-Incentive-Building-Aid").html("$" + district[6]).digits();
  jQuery("#2017-18-Transportation-Aid-WO-Summer").html("$" + district[7]).digits();
  jQuery("#2017-18-Summer-Transportation-Aid").html("$" + district[8]).digits();
  jQuery("#2017-18-Total-Transportation-Aid").html("$" + district[9]).digits();
  jQuery("#2017-18-BOCES-Aid").html("$" + district[10]).digits();
  jQuery("#2017-18-Non-BOCES-Special-Services-Aid").html("$" + district[11]).digits();
  jQuery("#2017-18-Charter-School-Transition-Aid").html("$" + district[12]).digits();
  jQuery("#2017-18-Private-Excess-Cost-Aid").html("$" + district[13]).digits();
  jQuery("#2017-18-Public-Excess-Cost-Aid").html("$" + district[14]).digits();
  jQuery("#2017-18-Supplemental-Public-Excess-Cost-Aid").html("$" + district[15]).digits();
  jQuery("#2017-18-Computer-Software-Aid").html("$" + district[16]).digits();
  jQuery("#2017-18-Library-Material-Aid").html("$" + district[17]).digits();
  jQuery("#2017-18-Textbook-Aid").html("$" + district[18]).digits();
  jQuery("#2017-18-Hardware-and-Tech-Aid").html("$" + district[19]).digits();
  jQuery("#2017-18-Full-Day-Kindergarten-Conversion-Aid").html("$" + district[20]).digits();
  jQuery("#2017-18-Universal-KinderGarten-Aid").html("$" + district[21]).digits();
  jQuery("#2017-18-Total-Aid").html("$" + district[22]).digits();

  jQuery("#2016-17-foundation-aid").html("$" + district[23]).digits();
  jQuery("#2016-17-high-tax-aid").html("$" + district[24]).digits();
  jQuery("#2016-17-Reorganization-Incentive-Operating-Aid").html("$" + district[25]).digits();
  jQuery("#2016-17-Academic-Enhancement-Aid").html("$" + district[26]).digits();
  jQuery("#2016-17-Building-Aid").html("$" + district[27]).digits();
  jQuery("#2016-17-Reorg-Incentive-Building-Aid").html("$" + district[28]).digits();
  jQuery("#2016-17-Transportation-Aid-WO-Summer").html("$" + district[29]).digits();
  jQuery("#2016-17-Summer-Transportation-Aid").html("$" + district[30]).digits();
  jQuery("#2016-17-Total-Transportation-Aid").html("$" + district[31]).digits();
  jQuery("#2016-17-BOCES-Aid").html("$" + district[32]).digits();
  jQuery("#2016-17-Non-BOCES-Special-Services-Aid").html("$" + district[33]).digits();
  jQuery("#2016-17-Charter-School-Transition-Aid").html("$" + district[34]).digits();
  jQuery("#2016-17-Private-Excess-Cost-Aid").html("$" + district[35]).digits();
  jQuery("#2016-17-Public-Excess-Cost-Aid").html("$" + district[36]).digits();
  jQuery("#2016-17-Supplemental-Public-Excess-Cost-Aid").html("$" + district[37]).digits();
  jQuery("#2016-17-Computer-Software-Aid").html("$" + district[38]).digits();
  jQuery("#2016-17-Library-Material-Aid").html("$" + district[39]).digits();
  jQuery("#2016-17-Textbook-Aid").html("$" + district[40]).digits();
  jQuery("#2016-17-Hardware-and-Tech-Aid").html("$" + district[41]).digits();
  jQuery("#2016-17-Full-Day-Kindergarten-Conversion-Aid").html("$" + district[42]).digits();
  jQuery("#2016-17-Universal-KinderGarten-Aid").html("$" + district[43]).digits();
  jQuery("#2016-17-Total-Aid").html("$" + district[44]).digits();

  jQuery("#diff-foundation-aid").html("$" + (district[1]-district[23])).digits();
  jQuery("#diff-high-tax-aid").html("$" + (district[2]-district[24])).digits();
  jQuery("#diff-Reorganization-Incentive-Operating-Aid").html("$" + (district[3]-district[25])).digits();
  jQuery("#diff-Academic-Enhancement-Aid").html("$" + (district[4]-district[26])).digits();
  jQuery("#diff-Building-Aid").html("$" + (district[5]-district[27])).digits();
  jQuery("#diff-Reorg-Incentive-Building-Aid").html("$" + (district[6]-district[28])).digits();
  jQuery("#diff-Transportation-Aid-WO-Summer").html("$" + (district[7]-district[29])).digits();
  jQuery("#diff-Summer-Transportation-Aid").html("$" + (district[8]-district[30])).digits();
  jQuery("#diff-Total-Transportation-Aid").html("$" + (district[9]-district[31])).digits();
  jQuery("#diff-BOCES-Aid").html("$" + (district[10]-district[32])).digits();
  jQuery("#diff-Non-BOCES-Special-Services-Aid").html("$" + (district[11]-district[33])).digits();
  jQuery("#diff-Charter-School-Transition-Aid").html("$" + (district[12]-district[34])).digits();
  jQuery("#diff-Private-Excess-Cost-Aid").html("$" + (district[13]-district[35])).digits();
  jQuery("#diff-Public-Excess-Cost-Aid").html("$" + (district[14]-district[36])).digits();
  jQuery("#diff-Supplemental-Public-Excess-Cost-Aid").html("$" + (district[15]-district[37])).digits();
  jQuery("#diff-Computer-Software-Aid").html("$" + (district[16]-district[38])).digits();
  jQuery("#diff-Library-Material-Aid").html("$" + (district[17]-district[39])).digits();
  jQuery("#diff-Textbook-Aid").html("$" + (district[18]-district[40])).digits();
  jQuery("#diff-Hardware-and-Tech-Aid").html("$" + (district[19]-district[41])).digits();
  jQuery("#diff-Full-Day-Kindergarten-Conversion-Aid").html("$" + (district[20]-district[42])).digits();
  jQuery("#diff-Universal-KinderGarten-Aid").html("$" + (district[21]-district[43])).digits();
  jQuery("#diff-Total-Aid").html("$" + (district[22]-district[44])).digits();

  function calculateDifference(firstId) {
    var difference = (((district[firstId]-district[firstId+22])/district[firstId+22])*100)
    return isNaN(difference) ? "-" : difference.toFixed(2) + "%"
  }

  jQuery("#percentDiff-foundation-aid").html(calculateDifference(1));
  jQuery("#percentDiff-high-tax-aid").html(calculateDifference(2));
  jQuery("#percentDiff-Reorganization-Incentive-Operating-Aid").html(calculateDifference(3));
  jQuery("#percentDiff-Academic-Enhancement-Aid").html(calculateDifference(4));
  jQuery("#percentDiff-Building-Aid").html(calculateDifference(5));
  jQuery("#percentDiff-Reorg-Incentive-Building-Aid").html(calculateDifference(6));
  jQuery("#percentDiff-Transportation-Aid-WO-Summer").html(calculateDifference(7));
  jQuery("#percentDiff-Summer-Transportation-Aid").html(calculateDifference(8));
  jQuery("#percentDiff-Total-Transportation-Aid").html(calculateDifference(9));
  jQuery("#percentDiff-BOCES-Aid").html(calculateDifference(10));
  jQuery("#percentDiff-Non-BOCES-Special-Services-Aid").html(calculateDifference(11));
  jQuery("#percentDiff-Charter-School-Transition-Aid").html(calculateDifference(12));
  jQuery("#percentDiff-Private-Excess-Cost-Aid").html(calculateDifference(13));
  jQuery("#percentDiff-Public-Excess-Cost-Aid").html(calculateDifference(14));
  jQuery("#percentDiff-Supplemental-Public-Excess-Cost-Aid").html(calculateDifference(15));
  jQuery("#percentDiff-Computer-Software-Aid").html(calculateDifference(16));
  jQuery("#percentDiff-Library-Material-Aid").html(calculateDifference(17));
  jQuery("#percentDiff-Textbook-Aid").html(calculateDifference(18));
  jQuery("#percentDiff-Hardware-and-Tech-Aid").html(calculateDifference(19));
  jQuery("#percentDiff-Full-Day-Kindergarten-Conversion-Aid").html(calculateDifference(20));
  jQuery("#percentDiff-Universal-KinderGarten-Aid").html(calculateDifference(21));
  jQuery("#percentDiff-Total-Aid").html(calculateDifference(22));

}