import AWS from 'aws-sdk';

AWS.config.update({
  region: 'ap-south-1',
  accessKeyId: 'access-key-id',
  secretAccessKey: 'secret-access-key'
});


const autoscaling = new AWS.AutoScaling();

const updateDesiredCapacity = (autoScalingGroupName: string, desiredCapacity: number) => {
  const params = {
    AutoScalingGroupName: autoScalingGroupName,
    DesiredCapacity: desiredCapacity
  };

  autoscaling.setDesiredCapacity(params, (err, data) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
};

const groupName = 'auto-scaling-group-name'; // Set your Auto Scaling group name
const newDesiredCapacity = 3; // Set the new desired capacity

updateDesiredCapacity(groupName, newDesiredCapacity);
