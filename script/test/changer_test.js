describe("changer", function() {

  it("click red makes the background red on click", function() {
    $('body').css('background-color', 'white');
    $('.click.red').click();
    expect($('body').css('background-color')).to.equal('rgb(120, 0, 0)');
  });

  it("hover green makes the background green on hover", function() {
    $('body').css('background-color', 'white');
    $('.hover.green').click();
    expect($('body').css('background-color')).to.equal('rgb(0, 120, 0)');
  });

  it("click blue makes the background blue on click", function() {
    $('body').css('background-color', 'white');
    $('.click.blue').click();
    expect($('body').css('background-color')).to.equal('rgb(0, 0, 120)');
  });

});
