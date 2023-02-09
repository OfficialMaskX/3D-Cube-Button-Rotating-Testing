// Cube Button Funcations

    //Cube Value Setting

CubeCurretPosition = 11;

    //



    // Cube Up Button Settings

function GoUpCube() {
    TDCube = document.getElementById('TD-Cube');
    if (CubeCurretPosition === 11) {
        TDCube.style.transform = 'rotateX(-90deg)';
        CubeCurretPosition = 12;
    }
    else if (CubeCurretPosition === 12) {
        TDCube.style.transform = 'rotateX(-180deg)';
        TDCube.style.transform = 'rotateY(-180deg)';
        CubeCurretPosition = 13;
    }
    else if (CubeCurretPosition === 13) {
        TDCube.style.transform = 'rotateX(-270deg)';
        CubeCurretPosition = 14;
    }
    else if (CubeCurretPosition === 14) {
        TDCube.style.transform = 'rotateX(0deg)';
        CubeCurretPosition = 11;
    }
    else if (CubeCurretPosition === 22) {
        TDCube.style.transform = 'rotateX(-90deg)';
        CubeCurretPosition = 12;
    }
    else if (CubeCurretPosition === 24) {
        TDCube.style.transform = 'rotateX(-90deg)';
        CubeCurretPosition = 12;
    }
}

    //

    // Cube Right Button Settings

function GoRightCube() {
    TDCube = document.getElementById('TD-Cube');
    if (CubeCurretPosition === 11) {
        TDCube.style.transform = 'rotateY(-90deg)';
        CubeCurretPosition = 22;
    }
    else if (CubeCurretPosition === 22) {
        TDCube.style.transform = 'rotateY(-180deg)';
        CubeCurretPosition = 13;
    }
    else if (CubeCurretPosition === 13) {
        TDCube.style.transform = 'rotateY(-270deg)';
        CubeCurretPosition = 24;
    }
    else if (CubeCurretPosition === 24) {
        TDCube.style.transform = 'rotateY(0deg)';
        CubeCurretPosition = 11;
    }
    else if (CubeCurretPosition === 14) {
        TDCube.style.transform = 'rotateY(0deg)';
        CubeCurretPosition = 11;
    }
    else if (CubeCurretPosition === 12) {
        TDCube.style.transform = 'rotateY(-90deg)';
        CubeCurretPosition = 22;
    }
}

    //



    // Cube Down Button Settings

function GoDownCube() {
    TDCube = document.getElementById('TD-Cube');
    if (CubeCurretPosition === 11) {
        TDCube.style.transform = 'rotateX(90deg)';
        CubeCurretPosition = 14;
    }
    else if (CubeCurretPosition === 14) {
        TDCube.style.transform = 'rotateX(180deg)';
        TDCube.style.transform = 'rotateY(180deg)';
        CubeCurretPosition = 13;
    }
    else if (CubeCurretPosition === 13) {
        TDCube.style.transform = 'rotateX(270deg)';
        CubeCurretPosition = 12;
    }
    else if (CubeCurretPosition === 12) {
        TDCube.style.transform = 'rotateX(0deg)';
        CubeCurretPosition = 11;
    }
    else if (CubeCurretPosition === 22) {
        TDCube.style.transform = 'rotateX(90deg)';
        CubeCurretPosition = 14;
    }
    else if (CubeCurretPosition === 24) {
        TDCube.style.transform = 'rotateX(90deg)';
        CubeCurretPosition = 14;
    }
}

    //



    // Cube Left Button Settings

function GoLeftCube() {
    TDCube = document.getElementById('TD-Cube');
    if (CubeCurretPosition === 11) {
        TDCube.style.transform = 'rotateY(90deg)';
        CubeCurretPosition = 24;
    }
    else if (CubeCurretPosition === 24) {
        TDCube.style.transform = 'rotateY(180deg)';
        CubeCurretPosition = 13;
    }
    else if (CubeCurretPosition === 13) {
        TDCube.style.transform = 'rotateY(270deg)';
        CubeCurretPosition = 22;
    }
    else if (CubeCurretPosition === 22) {
        TDCube.style.transform = 'rotateY(0deg)';
        CubeCurretPosition = 11;
    }
    else if (CubeCurretPosition === 12) {
        TDCube.style.transform = 'rotateY(90deg)';
        CubeCurretPosition = 24;
    }
    else if (CubeCurretPosition === 14) {
        TDCube.style.transform = 'rotateY(90deg)';
        CubeCurretPosition = 22;
    }
}

    //

//