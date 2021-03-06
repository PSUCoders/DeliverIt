class UserModel {
  constructor(
    fullName,
    email,
    phoneNum,
    imageUrl = "",
    cancelCount = 0,
    isActive = true,
    delivery = 0,
    ratings = 0
  ) {
    this.fullName = fullName;
    this.email = email;
    this.phoneNum = phoneNum;
    this.imageUrl = imageUrl;
    this.cancelCount = cancelCount;
    this.isActive = isActive;
    this.delivery = delivery;
    this.ratings = ratings;
  }
}

module.exports = UserModel;
