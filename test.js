function numberSquares(n) {
    if (n === 1) {
        return 1;
    }
    return n * n + numberSquares(n - 1);
    console.log(n);
}
