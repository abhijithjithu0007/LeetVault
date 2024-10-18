
function x() {
   let b = 11
    function z() {
        let a = 10
        function y() {
            console.log(a,b);
        }
        y()
    }
    z()
}
x()