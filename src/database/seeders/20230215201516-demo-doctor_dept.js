'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Doctor_Depts',
      [
        {
          _id: '411c6fc2-9b9f-4c02-9903-686a10de5b6d',
          department_id: '04525180-4192-4d71-9d35-90a042fc044b',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: '009c6da5-6c8d-1b90-9903-080a10fe5b0f',
          department_id: '04525180-4192-4d71-9d35-90a042fc044b',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: 'f3c0c4c7-01cf-4429-ba9d-e4f6800f5220',
          department_id: '04525180-4192-4d71-9d35-90a042fc044b',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: 'a5ddb0c5-9016-4d0b-b357-2b9abcbf1f93',
          department_id: '04525180-4192-4d71-9d35-90a042fc044b',
          doctor_id: 'aa9a40f9-de74-41e2-9ac7-5af88f2ecf98',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: '030ef598-9a2d-4280-9d5a-2d241a3250bd',
          department_id: '2ee50d93-43b9-44c3-a656-16bbc9c1f88d',
          doctor_id: '33f41511-880b-4b44-97ca-df6ea0a746cb',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: '620528cb-db75-4e83-b9f2-938e19c09a7c',
          department_id: '2ee50d93-43b9-44c3-a656-16bbc9c1f88d',
          doctor_id: 'aa9a40f9-de74-41e2-9ac7-5af88f2ecf98',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: 'b0e80959-bd3a-489e-81c3-0d1f26c817cd',
          department_id: '1dd1712f-64f5-4e65-a0b3-00e014c7557b',
          doctor_id: '9d0867d3-4fd3-482a-b423-3c1c508b6c69',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: 'ccda0751-6b0c-4084-8c32-d264b9caabc9',
          department_id: '1dd1712f-64f5-4e65-a0b3-00e014c7557b',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: '2762d812-7af8-40a6-831d-4c268916ea8c',
          department_id: '1dd1712f-64f5-4e65-a0b3-00e014c7557b',
          doctor_id: '33f41511-880b-4b44-97ca-df6ea0a746cb',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: '837ad107-4787-4ce1-b45d-5cd95e3f5634',
          department_id: '1dd1712f-64f5-4e65-a0b3-00e014c7557b',
          doctor_id: 'aa9a40f9-de74-41e2-9ac7-5af88f2ecf98',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: '36cfb7b4-c68c-465f-ae60-25eb49a73e94',
          department_id: '04525180-4192-4d71-9d35-90a042fc044b',
          doctor_id: '33f41511-880b-4b44-97ca-df6ea0a746cb',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: '5c2a7c0a-3088-43fc-8a2a-50784a9371d4',
          department_id: 'edb7bc66-05e9-4dfe-8fff-7e7e956c7c22',
          doctor_id: '33f41511-880b-4b44-97ca-df6ea0a746cb',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          _id: 'bfde6c4e-9c5d-4f27-856f-421d412fac7d',
          department_id: '12c50277-e015-45d1-9bd4-f0d2103a2733',
          doctor_id: '33f41511-880b-4b44-97ca-df6ea0a746cb',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Doctor_Depts', null, {});
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
