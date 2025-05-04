var hasMatch = function(s, p) {
    const parts = p.split("*");
    const indexOf = s.indexOf(parts[0]);
    const lastIndexOf = s.lastIndexOf(parts[1]);
    return indexOf !== -1 && lastIndexOf !== -1 && (indexOf + parts[0].length) <= lastIndexOf;
};