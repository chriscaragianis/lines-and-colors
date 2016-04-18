describe('clicker_changes_color', function() {

  after(function() {
    $('body').css('background-color', 'white');
  });

  it('should change the color', function() {
    $('body').css('background-color', 'rgb(0, 120, 0)');
    $('.clicker').click();
    expect($('body').css('background-color')).to.not.equal('rgb(0, 120, 0)');
  });
});
