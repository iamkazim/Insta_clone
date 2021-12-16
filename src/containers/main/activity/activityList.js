import React from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ActivityListItem from './activityListItem';

const data = [
    {
        key: '1',
        name: 'micheal',
        message: '@micheal liked your Photo',
    },
    { key: '2', name: 'lara', message: '@lara commented on your post' },
    { key: '3', name: 'jack', message: '@jack shared a post to you' },
    {
        key: '4',
        name: 'barack',
        message: '@barack commented- Is that you??',
    },
    { key: '5', name: 'carla', message: '@carla and 88 others liked your photo' },
    { key: '6', name: 'juan', message: '@juan commented on your post' },
    { key: '7', name: 'donna', message: '@donna commented: Awesome' },
    { key: '8', name: 'marta', message: '@marta liked and commented on your photo' },
    { key: '9', name: 'paula', message: '@paula shared your post' },
    { key: '10', name: 'cardi', message: '@bejong @cardi and 87 others liked your photo' },
    { key: '11', name: 'lana', message: '@lana liked your comment: all voices needed.' },
    { key: '12', name: 'robert', message: '@robert magna fermentum iaculis eu non' },
    { key: '13', name: 'george', message: '@george fermentum posuere urna' },
    { key: '14', name: 'lara', message: '@lara facilisis leo vel fringilla est' },
    { key: '15', name: 'lara', message: '@lara cquam viverra orci sagittis eu' },
];

export default function ActivityList() {
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => <ActivityListItem data={item} />}
        />
    );
}
