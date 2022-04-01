<?php

ob_start();

function resolve(int $a, int $b, int $c): ?array {
    $r = null;
    if(0 !== $a) {
        $d = ($b**2)-(4*$a*$c);
        if(0 < $d) {
            $r = [
                (-$b-sqrt($d))/(2*$a),
                (-$b+sqrt($d))/(2*$a),
            ];
        } elseif(0 === $d) {
            $r = [
                -$b/(2*$a),
            ];
        } // else, no solution
    } elseif(0 !== $b) { // bx+c=0 => x = -c/b
        $r = [-$c/$b,];
    } else { // c=0 ???
        $r = [0,];
    }
    return $r;
}

$results = resolve($_REQUEST['a']?? 0, $_REQUEST['b']?? 0, $_REQUEST['c']?? 0);

ob_end_clean();

echo json_encode($results);

exit;
