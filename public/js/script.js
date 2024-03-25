

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the modal
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    // Handle form submission
    document.getElementById('myForm').addEventListener('submit', function(e) {
      var formData = new FormData(this);
      var formObject = {};
      var s = " ";
      var i=0;
      formData.forEach(function(value, key){
        formObject[key] = value;
        if(i<2){   
            s+=value;
            s += " ";
        }
        i+=1;     
      });
      console.log(formObject); 
      alert("Hi"+s+"!! your form is submitted!!")
      this.reset();
    });
  });
