(_=>{
  var global = (0,eval)('this')
  global.$ = global.$ || {}
  $.instances = {}
  $.instances.judgement = function() {}
  $.instances.counter = function(startcount) {
    this.count = startcount
  } 
  $.instances.element = function(tagname) {
    this.element = document.createElement(tagname)
  }
  $.instances.element.prototype = {
    sethtml:function(innerhtml){
      this.element.innerHTML = innerhtml
    },
    gethtml:function(){
      return this.element.innerHTML
    }
    get:function(){
      return this.element
    }
  }
  $.instances.counter.prototype = {
    increment:function(count = 1) {
      this.count += count
      return this.count
    },
    decrement:function(count = 1) {
      this.count += count
      return this.count
    },
    get:function(){return this.count},
    set:function(count=0){
      this.count = count
      return count
    }
  }
  $.instances.judgement.prototype = {
    number: function(target) {
      return +target === target
    },
    string: function(target) {
      return '' + target == target
    },
    object: function(target) {
      return /^o/.test(typeof target)
    },
    function: function(target) {
      return /^f/.test(typeof target)
    },
    array: function(target) {
      return target instanceof Array
    },
    boolean: function(target) {
      return !!target === target
    },
    undefined: function(target) {
      return target === _
    },
    null: function(target) {
      return target === null
    },
    Infinity: function(target) {
      return target === 1 / 0
    }
  }
})()
