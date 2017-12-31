import * as firebase from 'firebase';

export class UploadService {
  
    async upload(file: File, folder: string): Promise<string> {
      var metadata = {
        contentType: 'image/jpeg',
      };

      var storage = firebase.storage().ref(`${folder}/${file.name}`);
      var uploadTask = storage.put(file, metadata);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function(snapshot) {
          console.log(snapshot);
        }, 
        function(error) {
        },
        function() {
        });

      await uploadTask;
      return uploadTask.snapshot.downloadURL;
    }
}