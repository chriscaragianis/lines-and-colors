describe("changer", function() {

  after(function() {
    $('body').css('background-color', 'white');
  });

  it("click red makes the background red on click", function() {
    $('body').css('background-color', 'white');
    $('.click-red').click();
    expect($('body').css('background-color')).to.equal('rgb(255, 0, 0)');
  });

  it("mouseover green makes the background green on mouseover", function() {
    $('body').css('background-color', 'white');
    $('.mouseover-green').mouseover();
    expect($('body').css('background-color')).to.equal('rgb(0, 128, 0)');
  });

  it("click blue makes the background blue on click", function() {
    $('body').css('background-color', 'white');
    $('.click-blue').click();
    expect($('body').css('background-color')).to.equal('rgb(0, 0, 255)');
  });

});
