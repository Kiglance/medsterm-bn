'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Dayoffs',
      [
        {
          dayoff_id: '4715285e-be2b-413f-a7f6-ca823b418703',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          dayoff_date: '2023-04-12T00:00:00.000Z',
          description: null,
          createdAt: '2023-03-11T19:00:59.148Z',
          updatedAt: '2023-03-11T19:00:59.148Z'
        },
        {
          dayoff_id: '4e70b90b-56d4-4132-9136-a98e891ecdbd',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          dayoff_date: '2023-04-25T00:00:00.000Z',
          description: null,
          createdAt: '2023-03-11T19:01:12.576Z',
          updatedAt: '2023-03-11T19:01:12.576Z'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dayoffs', null, {});
  }
};
/* ids */
// f5a5761f-09b3-4890-bbcf-2c59667dd828
// c107ce86-533d-4f38-94fc-3b9095ae3a73
// 17eabc49-2327-4f05-a884-70fea256a6ae
// 62b626bb-de99-479f-9f00-09778fd1d149
// db4af080-bd91-4973-adb4-a114df71e162
// 9340b2f3-2da7-445c-bf7e-6fd102ee9601
// b36e50e9-72a4-445c-ba0f-e09f431a6999

/* doctors */
// 64ff1279-8b59-4143-8e6c-a0c8f38bf9d5 |(2)**
// 5542b45b-530e-4d7f-bdd4-2322633f591f |(1)*
// aa9a40f9-de74-41e2-9ac7-5af88f2ecf98 |(3)***
// 33f41511-880b-4b44-97ca-df6ea0a746cb |(1)*
// 9d0867d3-4fd3-482a-b423-3c1c508b6c69 |(1)*

/* depts */
// 1dd1712f-64f5-4e65-a0b3-00e014c7557b \(4)
// b416477d-7802-4a56-8686-35a0f3f04fbc
// 12c50277-e015-45d1-9bd4-f0d2103a2733
// 2ee50d93-43b9-44c3-a656-16bbc9c1f88d \(2)**
// 65477b6e-0f80-4045-a2c5-26def429614a
// edb7bc66-05e9-4dfe-8fff-7e7e956c7c22
// e99d51a6-60da-4519-8e6e-8741d8ad6aed
// 04525180-4192-4d71-9d35-90a042fc044b \(3)
// 318173b2-3628-4293-9a99-7b8cd98840ac
// 70162fd4-f0d0-4e3a-b766-1071380af52e
