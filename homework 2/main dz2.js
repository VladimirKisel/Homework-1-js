function myFunc() {
    var rez = 0; with (document)
        var kal = 0; with (document) {
            if (getElementById('b1').checked) rez += parseFloat(getElementById('s1').innerHTML);
            if (getElementById('b1').checked) kal += parseFloat(getElementById('k1').innerHTML);
            if (getElementById('b2').checked) rez += parseFloat(getElementById('s2').innerHTML);
            if (getElementById('b2').checked) kal += parseFloat(getElementById('k2').innerHTML);
            if (getElementById('b3').checked) rez += parseFloat(getElementById('s3').innerHTML);
            if (getElementById('b3').checked) kal += parseFloat(getElementById('k3').innerHTML);
            if (getElementById('b4').checked) rez += parseFloat(getElementById('s4').innerHTML);
            if (getElementById('b4').checked) kal += parseFloat(getElementById('k4').innerHTML);
            if (getElementById('b5').checked) rez += parseFloat(getElementById('s5').innerHTML);
            if (getElementById('b5').checked) kal += parseFloat(getElementById('k5').innerHTML);
            if (getElementById('b6').checked) rez += parseFloat(getElementById('s6').innerHTML);
            if (getElementById('b6').checked) kal += parseFloat(getElementById('k6').innerHTML);
            if (getElementById('b7').checked) rez += parseFloat(getElementById('s7').innerHTML);
            if (getElementById('b7').checked) kal += parseFloat(getElementById('k7').innerHTML);
            if (getElementById('b8').checked) rez += parseFloat(getElementById('s8').innerHTML);
            if (getElementById('b8').checked) kal += parseFloat(getElementById('k8').innerHTML);
            if (getElementById('p1').checked) rez += parseFloat(getElementById('cp1').innerHTML);
            if (getElementById('p1').checked) kal += parseFloat(getElementById('kp1').innerHTML);
            if (getElementById('p2').checked) rez += parseFloat(getElementById('cp2').innerHTML);
            if (getElementById('p2').checked) kal += parseFloat(getElementById('kp2').innerHTML);
            getElementById('r').innerHTML = rez;
            getElementById('k').innerHTML = kal;
        }
}
