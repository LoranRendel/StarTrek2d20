const Nose1 = `<g xmlns="http://www.w3.org/2000/svg" id="Nose1" inkscape:groupmode="layer" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:label="Page 1">
<path d="m 301.40426,164.63894 c 1.996,-1.62267 4.11733,-2.12133 6.61333,-2.12133 2.496,0 -3.36933,-29.69867 -3.36933,-29.69867 l -2.49467,2.74533 c 0,0 0.99734,16.09734 0.62267,19.34134 -0.37333,3.244 -1.372,9.73333 -1.372,9.73333" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path11203"/>
<path d="m 226.0532,170.6246 c 0,0 7.955,3.65 14.226,3.276 6.27,-0.375 4.866,-1.311 4.866,-1.311 l -0.842,-2.994 c 0,0 -5.054,-3.089 -5.99,-4.399 -0.936,-1.31 -2.059,-2.714 -3.088,-0.842 -1.03,1.871 -4.617,3.718 -6.177,4.492 -1.561,0.774 -2.995,1.778 -2.995,1.778" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path11219" transform="matrix(1.3333333,0,0,-1.3333333,0,400)"/>
<path d="m 312.07493,174.62107 c 0,0 4.37866,-1.72 4.692,-3.128 0.31333,-1.408 -4.692,-1.408 -8.28934,-0.46933 -3.59733,0.93867 -2.65866,2.65867 0,2.50267 2.65867,-0.156 6.256,-0.156 3.59734,1.09466" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path11229"/>
<path d="m 315.51573,175.55947 c 0,0 3.284,1.25067 8.91466,-2.65866 5.63067,-3.90934 4.06667,-6.56934 4.06667,-7.664 0,-1.09467 -3.59733,-8.288 -4.84933,-11.104 -1.25067,-2.81467 -4.22267,-17.516 -3.596,-20.17467 0.62533,-2.65867 6.724,-9.228 6.724,-9.228 0,0 -8.132,7.97733 -8.44534,9.384 -0.312,1.408 2.03334,18.14267 3.75334,20.644 1.72133,2.50267 4.84933,10.00933 4.536,11.10533 -0.312,1.09467 -1.408,5.16 -4.37867,6.412 -2.972,1.25067 -6.72533,3.284 -6.72533,3.284" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path11233"/>
<path d="m 303.31679,173.83907 c 0,0 -4.22266,-2.81466 -3.128,-7.50666 0,0 -4.848,6.88133 3.128,7.50666" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path11237"/>
<path d="m 321.59559,174.14801 c 0,0 2.16,-0.284 2.50134,0.17066 0.34133,0.45467 1.42133,-0.228 1.98933,-1.08 0.568,-0.85333 0.73867,-2.89866 -0.228,-2.27333 -0.96533,0.62533 -4.26267,3.18267 -4.26267,3.18267" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path11241"/>
</g>`;

class NoseCatalog {

    private static _instance: NoseCatalog;

    public static get instance() {
        if (NoseCatalog._instance == null) {
            NoseCatalog._instance = new NoseCatalog();
        }
        return NoseCatalog._instance;
    }

    getNose() {
        return Nose1;
    }

}

export default NoseCatalog;