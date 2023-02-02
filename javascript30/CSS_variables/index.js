const input=document.querySelectorAll('.container input');
      

        function update(){

            const suffix=this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
        }
      
       
        input.forEach(input=> {
            input.addEventListener('change',update);
        });
        input.forEach(input=> {
            input.addEventListener('mousemove',update);
        });