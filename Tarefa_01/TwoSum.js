var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target){
                return [i,j]
            }
        }
    }
};

//para executar apenas o teste deste arquivo digitar npm teste "nome do arquivo"