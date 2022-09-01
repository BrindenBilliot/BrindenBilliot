(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
    createPlatform(820, 570, 0.2, 0.5); //1//
    createPlatform(520, 530, 0.2, 0.2); //2//
    createPlatform(200, 450, 0.5); //3//
    createPlatform(510, 380, 0.2); //4//
    createPlatform(0, 370, 0.5, 0.7); //5//
    createPlatform(740, 300, 0.4); //6//
    createPlatform(0, 300, 0.2); //7//
    createPlatform(200, 220, 1, 0.5); //8//
    createPlatform(0, 50, 3); //TOP BARRIER//
   // createPlatform(820, 570, 0.2, 1);//
   // createPlatform(200, 570, 0.2)//
    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 3, 2); // DO NOT DELETE

    // example:
    //createPlatform(200, 450, 0.5);//
    //createPlatform(520, 520, 0.2);//

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
