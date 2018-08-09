let peer = new Peer('sagar');

//code to send information
(function ($) {
    $('#done-button').on('click', function () {
        let file = $('#a')[0].files[0];

        let con = peer.connect('acharya', {
            label: "file",
            reliable: true,
            serialization: "none"
        });

        let fileSize = file.size;
        let name = file.name;
        let mime = file.type;
        let chunkSize = 64 * 1024; // bytes
        let offset = 0;

        console.log(fileSize + "  " + name + "  " + mime);

        function readChunk() {
            let r = new FileReader();
            let blob = file.slice(offset, chunkSize + offset);
            r.onload = function (evt) {
                if (!evt.target.error) {
                    offset += chunkSize;
                    console.log("sending: " + (offset / fileSize) * 100 + "%");
                    if (offset >= fileSize) {
                        con.on('open', function () {
                            // here you have conn.id
                            con.send(evt.target.result);
                        });
                        console.log("Done reading file " + name + " " + mime);
                        return;
                    } else {
                        con.on('open', function () {
                            // here you have conn.id
                            con.send(evt.target.result);
                        });

                    }
                } else {
                    console.log("Read error: " + evt.target.error);
                    return;
                }
                readChunk();
            };
            r.readAsArrayBuffer(blob);
        }

        readChunk();


    });
})(jQuery);

// let peer = new Peer('acharya');

let dataOrg = [];
let s = document.getElementById('a');
s.innerHTML = 'sagar';
let count = 0;
peer.on('connection', function (conn) {
    conn.on('data', function (data) {
        count++;
        dataOrg.push(data);
        console.log(count);
        if (count === 81) {
            let s = document.getElementById('a');
            s.innerHTML = dataOrg;


            let blob = new window.Blob(dataOrg);
            let anchor = document.createElement('a');
            anchor.href = URL.createObjectURL(blob);
            anchor.download = "downloadssss.mp4";
            anchor.textContent = 'XXXXXXX';
            anchor.style.display = 'none';
            document.body.appendChild(anchor);

            if (anchor.click) {
                anchor.click();

            } else {

                let evt = document.createEvent('MouseEvents');
                evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                anchor.dispatchEvent(evt);
            }


        }

    });

});

