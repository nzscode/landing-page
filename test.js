function potatoes(str) {
    const re = /potato/g;
    console.log((str || "").match(re) || []).length;
}
potatoes("potato");
potatoes("potatopotato");
potatoes("potatoapple");
